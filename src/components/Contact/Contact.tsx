import { Avatar, Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

interface ContactInterface {
  contact: {
    fullName: string;
    email: string;
    phoneNumber: string;
    tags: string[];
    image: string;
  };
}

const RedButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#e14545",
  backgroundColor: "transparent",
  border: "1px solid #e14545",
  boxShadow: "none",
  "&:hover": {
    color: "#ffff",
    backgroundColor: "#e14545",
    boxShadow: "none",
  },
}));

const Contact = (props: ContactInterface) => {
  const contact = props.contact;
  return (
    <div className="flex items-center justify-between border border-[#cfd0d3] rounded p-4 max-lg:flex-col max-lg:items-start">
      <div className="flex items-center mr-2 max-lg:w-full max-lg:justify-between max-lg:mr-0">
        <div className="mr-6">
          <Avatar src={contact.image} />
        </div>
        <div className="mr-6">
          <p>{contact.fullName}</p>
        </div>
        <div className="mr-6">
          <p>{contact.phoneNumber}</p>
        </div>
        <div>
          <p>{contact.email}</p>
        </div>
      </div>
      <div className="flex items-center max-lg:mt-2 max-lg:w-full max-lg:justify-between">
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

export default Contact;
