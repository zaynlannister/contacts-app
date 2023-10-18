import { Avatar, Box, Button, ButtonProps } from "@mui/material";
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
    <StyledRightBarContainer
      component="div"
      className="flex-[3_3_13%] border-l border-[#cfd0d3] px-4 pt-8 h-screen"
    >
      <div className="flex flex-col items-center">
        <Avatar sx={{ width: 100, height: 100 }} />
        <p className="font-bold mt-2">User name</p>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex justify-between items-center">
            <div className="text-[14px]">
              <p className="text-[#7C7C7C]">Phone number</p>
              <p>+023023020</p>
            </div>
            <div className="ml-2">
              <PhoneButton
                sx={{
                  width: "30px",
                  height: "30px",
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                }}
                variant="contained"
              >
                <LocalPhoneOutlinedIcon sx={{ padding: "2px" }} />
              </PhoneButton>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-[14px]">
              <p className="text-[#7C7C7C]">Email Address</p>
              <p>test@gmail.com</p>
            </div>
            <div className="ml-2">
              <EmailButton
                sx={{
                  width: "30px",
                  height: "30px",
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                }}
                variant="contained"
              >
                <LocalPostOfficeOutlinedIcon sx={{ padding: "2px" }} />
              </EmailButton>
            </div>
          </div>
        </div>
      </div>
    </StyledRightBarContainer>
  );
};

const StyledRightBarContainer = styled(Box)({
  "@media(max-width: 905px)": {
    display: "none",
  },
});

export default RightBar;
