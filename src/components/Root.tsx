import TopBar from "./TopBar/TopBar";
import Sidebar from "./SideBar/Sidebar";
import RightBar from "./RightBar/RightBar";
import Contacts from "../pages/Contacts/Contacts";

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-[7_7_70%]">
        <TopBar />
        <div className="flex">
          <Contacts />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Root;
