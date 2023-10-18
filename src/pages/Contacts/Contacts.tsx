import { Grid } from "@mui/material";
import Contact from "../../components/Contact/Contact";
import ScrollBar from "../../components/ScrollBar";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";

const Contacts = () => {
  const contacts = useSelector(
    (state: RootState) => state.contactsSlice.contacts
  );

  return (
    <div className="flex-[7_7_70%] p-4">
      <ScrollBar>
        <Grid container spacing={2}>
          {contacts.map((item: any, index: any) => (
            <Grid key={item.id} item xs={12} sm={12} md={12} xl={12}>
              <Contact contact={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </ScrollBar>
    </div>
  );
};

export default Contacts;
