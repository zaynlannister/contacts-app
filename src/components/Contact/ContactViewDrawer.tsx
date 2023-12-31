import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Avatar, styled } from "@mui/material";
import {
  GreenButton,
  OrangeButton,
  RedButton,
} from "../Buttons/ColoredButtons";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

interface ContactInterface {
  contact: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    tags: string[];
    image: string;
  };
}

type Anchor = "right" | "left" | "bottom" | "top";

export default function ContactDrawer(props: ContactInterface) {
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
        <Avatar
          src={props.contact?.image}
          sx={{ width: "130px", height: "130px" }}
        />
        <p className="font-bold mt-4">
          {props.contact?.firstName} {props.contact?.lastName}
        </p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center border-b border-[#e7e7e7] pb-2">
          <div className="text-[14px]">
            <p className="text-[#7C7C7C]">Phone number</p>
            <p>{props.contact?.phoneNumber}</p>
          </div>
          <div className="ml-2">
            <GreenButton
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
            </GreenButton>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-[14px]">
            <p className="text-[#7C7C7C]">{props.contact?.email}</p>
            <p>test@gmail.com</p>
          </div>
          <div className="ml-2">
            <OrangeButton
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
            </OrangeButton>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledAccountButton component="div">
            <RedButton
              sx={{
                p: 0,
                minHeight: 0,
                minWidth: 0,
                marginRight: 1,
              }}
              variant="contained"
              onClick={toggleDrawer("right", true)}
            >
              <RemoveRedEyeOutlinedIcon sx={{ padding: "2px" }} />
            </RedButton>
          </StyledAccountButton>
          <Drawer
            anchor="right"
            open={state}
            onClose={toggleDrawer("right", false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const StyledAccountButton = styled(Box)({
  display: "none",
  "@media(max-width: 905px)": {
    display: "block",
  },
});
