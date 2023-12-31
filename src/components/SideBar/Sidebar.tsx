import { Avatar, Typography, styled, Box } from "@mui/material";
import SideBarContent from "./SideBarContent";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";

const Sidebar = () => {
  const auth = useSelector((state: RootState) => state.authSlice);
  return (
    <StyledSideBar
      component="div"
      className="border-r border-[#cfd0d3] min-w-[300px] max-sm:hidden md:flex-[3_3_13%] 2xl:flex-[3_3_10%] h-screen p-4"
    >
      <div>
        <div className="pt-2">
          <Typography data-aos="fade-left" variant="h6">
            Address Book
          </Typography>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <Avatar sx={{ width: "120px", height: "120px" }} />
          <p data-aos="fade-up" className="font-bold mt-2">
            {auth.user?.name}
          </p>
          {/* <p data-aos="fade-up" className="text-[#7C7C7C] text-[14px]">
            email@gmail.com
          </p> */}
        </div>
        <div className="mt-4">
          <SideBarContent
            text={auth.user?.phoneNumber || ""}
            icon={<LocalPhoneOutlinedIcon sx={{ fontSize: 20 }} />}
          />
          <SideBarContent
            text="Tashkent"
            icon={<LocationOnOutlinedIcon sx={{ fontSize: 20 }} />}
          />
        </div>
      </div>
    </StyledSideBar>
  );
};

const StyledSideBar = styled(Box)({
  "@media(max-width: 1410px)": {
    display: "none",
  },
});

export default Sidebar;
