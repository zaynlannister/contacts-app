import React from "react";
import { Avatar, styled, Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { RedButton } from "../Buttons/ColoredButtons";
import ContactDrawer from "./ContactViewDrawer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import {
  clearActiveContact,
  setActiveContact,
} from "../../stores/slices/contactStateSlice";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../../stores/slices/contactSlice";

interface ContactInterface {
  index: number;
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

const Contact = (props: ContactInterface) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textRef = React.useRef<HTMLParagraphElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const contact = props.contact;
  const activeContactId = useSelector(
    (state: RootState) => state.contactsStateSlice.activeContactId
  );
  const isActive = activeContactId === contact.id;

  const handleClick = () => {
    if (isActive) {
      dispatch(clearActiveContact());
    } else {
      navigate(`contacts/${contact.id}`);
      dispatch(setActiveContact(contact.id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  React.useEffect(() => {
    const handleTextOverflow = () => {
      const textElement = textRef.current;
      if (textElement) {
        const windowWidth = window.innerWidth;
        const thresholdWidth = 930; // Пороговая ширина экрана для обрезания

        if (windowWidth < thresholdWidth) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      }
    };

    window.addEventListener("resize", handleTextOverflow);
    handleTextOverflow();

    return () => {
      window.removeEventListener("resize", handleTextOverflow);
    };
  }, []);
  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between border-2 rounded p-4 max-sm:flex-col max-lg:items-start cursor-pointer ${
        isActive ? "border-[#80B3FF]" : "border-[#cfd0d3]"
      }`}
    >
      <div className="flex items-center mr-2 max-lg:w-full max-lg:mr-0 max-sm:justify-between max-sm:border-b max-sm:border-[#e7e7e7] max-sm:pb-2">
        <div className="flex items-center">
          <div className="mr-6">
            <Avatar src={contact.image} />
          </div>
          <div className="mr-6">
            <p
              className={`${isSmallScreen ? "w-[100px]" : "w-[150px]"}`}
              ref={textRef}
            >
              {isSmallScreen
                ? `${contact.firstName.charAt(0)}. ${contact.lastName}`
                : `${contact.firstName} ${contact.lastName}`}
            </p>
          </div>
        </div>
        <div className="mr-6 max-sm:m-0">
          <p>{contact.phoneNumber}</p>
        </div>
        <StyledEmail component="div">
          <p>{contact.email}</p>
        </StyledEmail>
      </div>
      <div className="flex items-center max-lg:mt-2 max-sm:w-full max-lg:justify-between">
        <div className="flex pr-4">
          {contact.tags.map((item, index) => (
            <div
              className="mr-2 font-bold text-[10px] text-[#d26c4e] bg-[#ffefd6] px-2 py-1 rounded"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex">
          <ContactDrawer contact={contact} />
          <RedButton
            sx={{
              p: 0,
              minHeight: 0,
              minWidth: 0,
              marginRight: 1,
            }}
            variant="contained"
          >
            <ModeEditOutlineOutlinedIcon sx={{ padding: "2px" }} />
          </RedButton>
          <RedButton
            onClick={handleDelete}
            sx={{
              p: 0,
              minHeight: 0,
              minWidth: 0,
            }}
            variant="contained"
          >
            <DeleteOutlineIcon sx={{ padding: "2px" }} />
          </RedButton>
        </div>
      </div>
    </div>
  );
};

const StyledEmail = styled(Box)({
  "@media(max-width: 1120px)": {
    display: "none",
  },
});

export default Contact;
