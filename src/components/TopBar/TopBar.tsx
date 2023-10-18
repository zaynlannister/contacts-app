import React from "react";
import { Button, ButtonProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SideBarDrawer from "../SideBar/SideBarDrawer";
import CreateModal from "../Modals/CreateModal";

const GreenButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#00C938",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#07a433",
  },
}));

const TopBar = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <form className="flex border-b border-[#cfd0d3]">
      <div className="flex flex-[7_7_70%] p-4">
        <SideBarDrawer />
        <TextField
          fullWidth
          size="small"
          placeholder="Search by name, phone"
          autoComplete="off"
          variant="outlined"
        />

        <Button
          size="small"
          sx={{
            marginLeft: "8px",
            padding: "0 12px",
            minHeight: 0,
            minWidth: 0,
          }}
          variant="contained"
        >
          <SearchIcon />
        </Button>
      </div>
      <div className="flex justify-end flex-[3_3_13%] p-4">
        <Button
          size="small"
          sx={{
            padding: "0 12px",
            minHeight: 0,
            minWidth: 0,
          }}
          variant="contained"
        >
          <FilterAltIcon />
        </Button>
        <CreateModal open={openModal} handleClose={handleCloseModal} />
        <GreenButton
          onClick={handleOpenModal}
          size="small"
          sx={{
            marginLeft: "8px",
            padding: "0 12px",
            minHeight: 0,
            minWidth: 0,
          }}
          variant="contained"
          startIcon={<AddCircleOutlineOutlinedIcon />}
        >
          Create
        </GreenButton>
      </div>
    </form>
  );
};

export default TopBar;
