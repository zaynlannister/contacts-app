import * as React from "react";
import {
  Box,
  Avatar,
  IconButton,
  styled,
  SwipeableDrawer,
} from "@mui/material";
import SideBarContent from "./SideBarContent";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

type Anchor = "right" | "left" | "bottom" | "top";

export default function SideBarDrawer() {
  const [state, setState] = React.useState<boolean>(false);

  const toggleDrawer =
    (_: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box role="presentation" sx={{ width: 350, padding: 4 }}>
      <div className="mx-auto w-fit text-center">
        <Avatar sx={{ width: "130px", height: "130px" }} />
        <p className="font-bold mt-4">Full Name</p>
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
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledAccountButton component="div">
            <IconButton
              onClick={toggleDrawer("left", true)}
              sx={{ height: "40px", width: "40px", marginRight: "10px" }}
            >
              <Avatar sx={{ width: "40px", height: "40px" }} />
            </IconButton>
          </StyledAccountButton>
          <SwipeableDrawer
            anchor="left"
            open={state}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const StyledAccountButton = styled(Box)({
  display: "none",
  "@media(max-width: 1410px)": {
    display: "block",
  },
});
