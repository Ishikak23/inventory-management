import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Table = (props) => {
  const {
    tableRowData,
    handleEditClick,
    handleViewClick,
    handleDeleteClick,
    isDisabled,
  } = props;
  return (
    <div className="w-[100%] m-4 p-4">
      <table className="w-[100%]">
        <thead className="text-[#5c6436] text-left pb-1 h-14">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {tableRowData?.map((rowData, index) => {
            return (
              <tr className="h-11" key={index}>
                <td>{rowData?.name}</td>
                <td>{rowData?.category}</td>
                <td>{rowData?.value}</td>
                <td>{rowData?.quantity}</td>
                <td>{rowData?.price}</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        (!isDisabled || !rowData?.disabled) &&
                        handleEditClick(index)
                      }
                    >
                      <EditIcon
                        style={{
                          color:
                            isDisabled || rowData?.disabled ? "grey" : "green",
                        }}
                      />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        (!isDisabled || rowData?.disabled) &&
                        handleViewClick(index)
                      }
                    >
                      <RemoveRedEyeIcon
                        style={{
                          color:
                            isDisabled || rowData?.disabled
                              ? "grey"
                              : "#3f2f42",
                        }}
                      />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        (!isDisabled || rowData?.disabled) &&
                        handleDeleteClick(index)
                      }
                    >
                      <DeleteIcon
                        style={{
                          color:
                            isDisabled || rowData?.disabled ? "grey" : "red",
                        }}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
