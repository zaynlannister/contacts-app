import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GreenButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#00C938",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#07a433",
    boxShadow: "none",
  },
}));

export const OrangeButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#FFB422",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#f09e00",
    boxShadow: "none",
  },
}));
