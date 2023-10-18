import Box from "@mui/material/Box";
import {
  Button,
  Typography,
  TextField,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TagsSelect from "../TagsSelect/TagsSelect";
import CloseIcon from "@mui/icons-material/Close";
// import { useDispatch } from "react-redux";

interface CreateModalInterface {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function CreateModal(props: CreateModalInterface) {
  // const dispatch = useDispatch();
  // const handleCreate = () => {
  //   dispatch(
  //     createContact({
  //       id: 4,
  //       firstName: "Test 1",
  //       lastName: "test 2",
  //       email: "1",
  //       phoneNumber: "+231313",
  //       tags: ["1tag", "2tag"],
  //       iamge: "",
  //     })
  //   );
  // };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox sx={style} component="div">
          <div className="flex items-center justify-between">
            <Typography variant="h6" component="h2">
              Create new contact
            </Typography>
            <IconButton onClick={props.handleClose} className="self-start">
              <CloseIcon sx={{ color: "red" }} />
            </IconButton>
          </div>
          <Grid container spacing={2} mt="4px">
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic-0"
                label="First name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic-1"
                label="Last name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic-2"
                label="Phone number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic-3"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TagsSelect />
            </Grid>
          </Grid>
          <Box className="mt-8 flex justify-end">
            <Button variant="contained">Create</Button>
          </Box>
        </StyledModalBox>
      </Modal>
    </div>
  );
}

const StyledModalBox = styled(Box)({
  "@media(max-width: 635px)": {
    width: "90%",
  },
});
