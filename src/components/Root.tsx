import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="ml-2 mt-2">
        <Sidebar />
      </div>
      <div className="w-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
