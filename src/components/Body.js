import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Table from "./Table";
import { mockData } from "../constant";
import Popup from "./Popup";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [tableData, setTableData] = useState(mockData);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedRow, setSelectedrow] = useState();
  const [isDisabledFunctionality, setIsDisabledFunctionality] = useState(false);
  const contextData = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setIsDisabledFunctionality(
      contextData.currentUser === "user" ? true : false
    );
  }, [contextData]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
      );
      const jsonData = await response.json();
      const modifiedJsonData = jsonData.map((item) => {
        return { ...item, disabled: false };
      });
      setTableData(modifiedJsonData);
    } catch {
      console.log("error loading data");
    }
  };
  const totalProducts = tableData.filter((item) => !item.disabled).length;
  const totalStoreValue = tableData.reduce((aggr, item) => {
    if (!item.disabled) {
      aggr = aggr + parseInt(item.price.substring(1));
    }
    return aggr;
  }, 0);
  const outOfStockValue = tableData.reduce((aggr, item) => {
    if (item.quantity === 0 && !item.disabled) {
      aggr = aggr + 1;
    }
    return aggr;
  }, 0);
  const categoryArray = [];
  const numberOfCategories = tableData.reduce((aggr, item) => {
    if (!categoryArray.includes(item.category) && !item.disabled) {
      aggr = aggr + 1;
      categoryArray.push(item.category);
    }
    return aggr;
  }, 0);

  const handleEditClick = (data) => {
    setShowEditPopup(true);
    setSelectedrow(data);
  };
  const handlePopupData = (data) => {
    setTableData((prev) => {
      const arr = prev.map((item, i) => {
        if (i === selectedRow) {
          return {
            ...data,
            name: item.name,
          };
        } else {
          return item;
        }
      });
      return arr;
    });
    setShowEditPopup(false);
  };

  const handleViewClick = (data) => {
    setTableData((prev) => {
      const arr = prev.map((item, index) => {
        if (index === data) {
          return {
            ...item,
            disabled: true,
          };
        } else {
          return item;
        }
      });
      return arr;
    });
  };
  const handleDeleteClick = (data) => {
    setTableData((prev) => {
      const arr = prev.filter((item, index) => index !== data);
      return arr;
    });
  };
  return (
    <div>
      <div className="flex flex-row p-4 m-4 gap-3">
        <Card type="Total Product" countValue={totalProducts} />
        <Card type="Total Store value" countValue={totalStoreValue} />
        <Card type="Out of stocks" countValue={outOfStockValue} />
        <Card type="No. of categories" countValue={numberOfCategories} />
      </div>
      <div>
        <Table
          tableRowData={tableData}
          handleEditClick={handleEditClick}
          handleViewClick={handleViewClick}
          handleDeleteClick={handleDeleteClick}
          isDisabled={isDisabledFunctionality}
        />
      </div>
      {showEditPopup && (
        <Popup
          getEditedData={handlePopupData}
          setShowEditPopup={setShowEditPopup}
          name={tableData[selectedRow]?.name}
        />
      )}
    </div>
  );
};

export default Body;
