import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Popup = ({ getEditedData, setShowEditPopup, name }) => {
  const [popupData, setPopupData] = useState({
    category: "",
    value: "",
    quantity: 0,
    price: "",
  });

  const handleChangeCategory = (event) => {
    setPopupData({ ...popupData, category: event.target.value });
  };
  const handleChangeQuantity = (event) => {
    setPopupData({ ...popupData, quantity: event.target.value });
  };
  const handleChangePrice = (event) => {
    setPopupData({ ...popupData, price: event.target.value });
  };
  const handleChangeValue = (event) => {
    setPopupData({ ...popupData, value: event.target.value });
  };
  const handleCancel = () => {
    setShowEditPopup(false);
  };
  const handleSave = () => {
    getEditedData({ ...popupData, price: "$" + popupData.price });
  };
  return (
    <div className="bg-[#292b27] absolute w-[400px] h-[315px] p-4 rounded-lg left-0 right-0 top-0 bottom-0 m-auto">
      <div className="flex flex-col gap-5 m-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label className="text-white font-semibold text-2xl w-fit">
              Edit Product
            </label>
            <label className="text-white font-medium size-4 w-fit">
              {name}
            </label>
          </div>
          <div onClick={handleCancel}>
            <CloseIcon style={{ color: '#b4ce4a'}} />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-white">Category</label>
            <input
              className="bg-[#3f413d] m-1 p-1"
              onChange={handleChangeCategory}
              value={popupData?.category}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Quantity</label>
            <input
              className="bg-[#3f413d] m-1 p-1"
              onChange={handleChangeQuantity}
              value={popupData?.quantity}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Value</label>
            <input
              className="bg-[#3f413d] m-1 p-1"
              onChange={handleChangeValue}
              value={popupData?.value}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Price</label>
            <input
              className="bg-[#3f413d] m-1 p-1"
              onChange={handleChangePrice}
              value={popupData?.price}
            ></input>
          </div>
        </div>
        <div className="flex flex-row justify-end g-3">
          <button
            className="p-2  text-[#b4ce4a] border-none"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="p-2 text-white" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
