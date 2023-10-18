import Box from "@mui/material/Box";
import {
  Button,
  Typography,
  TextField,
  Grid,
  IconButton,
  styled,
  Avatar,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TagsSelect from "../TagsSelect/TagsSelect";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createContact } from "../../stores/slices/contactSlice";

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
  const dispatch = useDispatch();

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const { values, setFieldValue, handleSubmit, handleChange } = useFormik({
    initialValues: {
      image: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      tags: [],
    },
    onSubmit: () => {
      if (
        values.firstName.trim().length >= 2 &&
        values.lastName.trim().length >= 2 &&
        values.phoneNumber.replace(/\s/g, "").length >= 4 &&
        isEmailValid(values.email)
      ) {
        const newValues = {
          id: Date.now(),
          firstName: values.firstName.replace(/\s/g, ""),
          lastName: values.lastName.replace(/\s/g, ""),
          phoneNumber: values.phoneNumber.replace(/\s/g, ""),
          email: values.email.replace(/\s/g, ""),
          tags: values.tags,
          image: values.image,
        };
        dispatch(createContact(newValues));
        props.handleClose();
      } else {
        alert("Неправильные данные.");
      }
    },
  });

  const handleChangeFile = (event: any) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue("image", reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <Avatar
                src={values.image}
                sx={{ width: "80px", height: "80px" }}
              />
              <input
                onChange={handleChangeFile}
                className="hidden"
                type="file"
                name="photo"
                id="upload-photo"
              />
              <label
                className="hover:bg-[rgb(240,247,255)] inline-block mt-4"
                style={{
                  border: "1px solid #1C3FAA",
                  color: "#1C3FAA",
                  borderRadius: "5px",
                  padding: "6px 10px",
                  cursor: "pointer",
                  transition: "100ms all",
                }}
                htmlFor="upload-photo"
              >
                Choose photo
              </label>
            </div>
            <Grid container spacing={2} mt="4px">
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="firstName"
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  id="outlined-basic-0"
                  label="First name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="lastName"
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  id="outlined-basic-1"
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="phoneNumber"
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  id="outlined-basic-2"
                  label="Phone number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="email"
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  id="outlined-basic-3"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TagsSelect setFieldValue={setFieldValue} />
              </Grid>
            </Grid>
            <Box className="mt-8 flex justify-end">
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Box>
          </form>
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
