import { Avatar, Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

const PhoneButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#00C938",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#07a433",
    boxShadow: "none",
  },
}));

const EmailButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#FFB422",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#f09e00",
    boxShadow: "none",
  },
}));

const RightBar = () => {
  return (
    <div className="max-w-[300px] min-w-[300px] border-l border-[#cfd0d3] px-4 pt-8 h-screen">
      <div className="flex flex-col items-center">
        <Avatar sx={{ width: 100, height: 100 }} />
        <p className="font-bold mt-2">User name</p>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex justify-between">
            <div className="text-[14px]">
              <p className="text-[#7C7C7C]">Phone number</p>
              <p>+023023020</p>
            </div>
            <div>
              <PhoneButton
                sx={{
                  paddingX: "10px",
                  minHeight: 0,
                  minWidth: 0,
                }}
                variant="contained"
              >
                <LocalPhoneOutlinedIcon />
              </PhoneButton>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-[14px]">
              <p className="text-[#7C7C7C]">Email Address</p>
              <p>test@gmail.com</p>
            </div>
            <div>
              <EmailButton
                sx={{
                  paddingX: "10px",
                  minHeight: 0,
                  minWidth: 0,
                }}
                variant="contained"
              >
                <LocalPostOfficeOutlinedIcon />
              </EmailButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
