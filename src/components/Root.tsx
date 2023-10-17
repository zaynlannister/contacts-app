import TopBar from "./TopBar/TopBar";
import Sidebar from "./SideBar/Sidebar";
import RightBar from "./RightBar/RightBar";
import Contacts from "../pages/Contacts/Contacts";

const Root = () => {
  return (
    <div className="flex overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <TopBar />
        <div className="flex justify-between">
          <Contacts />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Root;
