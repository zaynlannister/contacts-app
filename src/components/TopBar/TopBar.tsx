import { Button, ButtonProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const GreenButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#ffff",
  backgroundColor: "#00C938",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#07a433",
  },
}));

const TopBar = () => {
  return (
    <div className="border-b border-[#cfd0d3] py-6 pl-[150px] pr-4">
      <div>
        <div>
          <form className="flex justify-between">
            <div className="flex w-full mr-[290px]">
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
            <div className="flex">
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
              <GreenButton
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
        </div>
      </div>
    </div>
  );
};

export default TopBar;
