import { Switch } from "@mui/material";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { setUser } = useContext(UserContext);
  const handleToggle = (event) => {
    const isUser = event.target.checked;
    setUser(isUser ? "user" : "admin");
  };
  return (
    <div className="text-white">
      <div className="flex flex-row justify-end p-4 ">
        <span className="p-1">Admin</span>
        <Switch onChange={handleToggle} />
        <span className="p-1">User</span>
      </div>
      <div className="m-4 p-4 text-2xl">Inventory Stats</div>
    </div>
  );
};

export default Header;
