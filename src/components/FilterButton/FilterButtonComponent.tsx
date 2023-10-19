import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import {
  setFamilyChecked,
  setFriendChecked,
} from "../../stores/slices/filterSlice";

interface FilterButtonComponentProps {
  onFilterChange: (family: boolean, friend: boolean) => void;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function FilterButtonComponent(
  props: FilterButtonComponentProps
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const familyChecked = useSelector(
    (state: RootState) => state.filterSlice.familyChecked
  );
  const friendChecked = useSelector(
    (state: RootState) => state.filterSlice.friendChecked
  );

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFamilyChange = () => {
    setFamilyChecked(!familyChecked);
    props.onFilterChange(!familyChecked, friendChecked);
  };

  const handleFriendChange = () => {
    setFriendChecked(!friendChecked);
    props.onFilterChange(familyChecked, !friendChecked);
  };

  return (
    <>
      <Button
        className="flex items-center"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        size="small"
        sx={{
          minHeight: "40px",
          minWidth: "40px",
          p: 0,
        }}
      >
        <FilterAltIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <FormControlLabel
            control={
              <Checkbox
                checked={familyChecked}
                onChange={handleFamilyChange}
                name="familyCheckbox"
              />
            }
            label="Family"
          />
        </MenuItem>
        <MenuItem disableRipple>
          <FormControlLabel
            control={
              <Checkbox
                checked={friendChecked}
                onChange={handleFriendChange}
                name="friendCheckbox"
              />
            }
            label="Friend"
          />
        </MenuItem>
      </StyledMenu>
    </>
  );
}
