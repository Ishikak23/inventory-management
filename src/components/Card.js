import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Card = ({ type, countValue, icon }) => {
  return (
    <div className="w-[400px] h-32 bg-[#243325] rounded-lg p-4">
      <div className="flex flex-row gap-8 p-2">
        <div className="flex items-center">
          <ShoppingCartIcon style={{ color: "white" }} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold size-4 pb-2 w-fit">{type}</h3>
          <h4 className="text-white font-medium pt-6">{countValue}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
