import React from "react";
import { Avatar, Typography } from "@mui/material";
import SideBarContent from "./SideBarContent";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Sidebar = () => {
  const [username, setUserName] = React.useState("User Name");
  return (
    <div className="border-r border-[#cfd0d3] max-sm:hidden md:flex-[3_3_13%] 2xl:flex-[3_3_10%] h-screen pl-4">
      <div>
        <div className="pt-2">
          <Typography variant="h6">Address Book</Typography>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <Avatar sx={{ width: "120px", height: "120px" }} />
          <p className="font-bold mt-2">{username}</p>
          <p className="text-[#7C7C7C] text-[14px]">email@gmail.com</p>
        </div>
        <div className="mt-4">
          <SideBarContent
            text="+998332488828"
            icon={<LocalPhoneOutlinedIcon sx={{ fontSize: 20 }} />}
          />
          <SideBarContent
            text="Tashkent"
            icon={<LocationOnOutlinedIcon sx={{ fontSize: 20 }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
