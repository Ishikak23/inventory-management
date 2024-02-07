import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [user, setUser] = useState("admin");
  useEffect(() => {
    setUser("admin");
  }, []);
  return (
    <UserContext.Provider value={{ currentUser: user, setUser }}>
      <div className="bg-[#1f2221] w-[100-vh] h-[100vh]">
        <Header />
        <Body />
      </div>
    </UserContext.Provider>
  );
}

export default App;
