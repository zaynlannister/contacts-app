import React from "react";
import { Grid } from "@mui/material";
import Contact from "../../components/Contact/Contact";
import ScrollBar from "../../components/ScrollBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { loadContacts } from "../../stores/slices/contactSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state: RootState) => state.contactsSlice.contacts
  );

  React.useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    const parsedContacts = storedContacts ? JSON.parse(storedContacts) : null;

    if (parsedContacts) {
      dispatch(loadContacts(parsedContacts));
    }
  }, []);
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
