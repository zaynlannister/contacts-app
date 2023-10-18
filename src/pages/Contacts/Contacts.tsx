import { Grid } from "@mui/material";
import Contact from "../../components/Contact/Contact";
import ScrollBar from "../../components/ScrollBar";

const contacts = [
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
];

const Contacts = () => {
  return (
    <div className="flex-[7_7_70%] p-4">
      <ScrollBar>
        <Grid container spacing={2}>
          {[...contacts, ...contacts, ...contacts].map((item, index) => (
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Contact key={index} contact={item} />
            </Grid>
          ))}
        </Grid>
      </ScrollBar>
    </div>
  );
};

export default Contacts;
