import TopBar from "./TopBar/TopBar";
import Sidebar from "./SideBar/Sidebar";
import RightBar from "./RightBar/RightBar";
import Contacts from "../pages/Contacts/Contacts";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import LoginPage from "./Login/LoginPage";

const Root = () => {
  const auth = useSelector((state: RootState) => state.authSlice);

  return (
    <>
      {auth.isLogged ? (
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
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Root;
