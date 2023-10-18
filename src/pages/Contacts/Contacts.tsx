import React from "react";
import { Grid, Typography } from "@mui/material";
import Contact from "../../components/Contact/Contact";
import ScrollBar from "../../components/ScrollBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { loadContacts } from "../../stores/slices/contactSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.searchSlice);
  const contacts = useSelector(
    (state: RootState) => state.contactsSlice.contacts
  );

  const filteredContacts = contacts.filter((contact) => {
    const { firstName, lastName, email, phoneNumber } = contact;
    const searchQueryLowerCase = searchQuery.toLowerCase();

    return (
      firstName.toLowerCase().includes(searchQueryLowerCase) ||
      lastName.toLowerCase().includes(searchQueryLowerCase) ||
      email.toLowerCase().includes(searchQueryLowerCase) ||
      phoneNumber.includes(searchQuery)
    );
  });

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
        {contacts.length === 0 ? (
          <Typography
            variant="h3"
            className="text-[#bdbdbd] text-center font-bold pt-12"
          >
            There is no contacts!
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredContacts.map((item: any, index: any) => (
              <Grid key={item.id} item xs={12} sm={12} md={12} xl={12}>
                <Contact contact={item} index={index} />
              </Grid>
            ))}
          </Grid>
        )}
      </ScrollBar>
    </div>
  );
};

export default Contacts;
