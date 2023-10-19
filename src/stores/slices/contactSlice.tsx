import { createSlice } from "@reduxjs/toolkit";

interface ContactInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  tags: string[];
  image: string;
}

interface ContactsInterface {
  isLoading: boolean;
  contact: ContactInterface | null;
  contacts: ContactInterface[];
}

const initialState = {
  isLoading: false,
  contact: null,
  contacts: [],
} as ContactsInterface;

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== parseInt(action.payload)
      );
    },
    editContact: (state, action) => {
      const { contactId, updatedContact } = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === contactId
      );
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    getOneContact: (state, action) => {
      const contact = state.contacts.find(
        (item) => item.id === parseInt(action.payload)
      );
      state.contact = contact || null;
    },
    loadContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  createContact,
  deleteContact,
  editContact,
  getOneContact,
  loadContacts,
} = contactsSlice.actions;
export default contactsSlice.reducer;
