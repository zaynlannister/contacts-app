import { styled } from "@mui/material";

const ScrollBar = (props: any) => {
  return (
    <StyledBoxScrollbar
      style={{
        height: "calc(100vh - 150px)",
        overflowY: "auto",
        paddingRight: "10px",
      }}
    >
      {props.children}
    </StyledBoxScrollbar>
  );
};

export default ScrollBar;

const StyledBoxScrollbar = styled("div")(({}) => ({
  /* width and height */
  "&::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "5px",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));
