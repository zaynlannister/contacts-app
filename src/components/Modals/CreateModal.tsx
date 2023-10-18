import Box from "@mui/material/Box";
import { Button, Typography, TextField, Grid, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import TagsSelect from "../TagsSelect/TagsSelect";
import CloseIcon from "@mui/icons-material/Close";

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
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                label="First name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
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
        </Box>
      </Modal>
    </div>
  );
}
