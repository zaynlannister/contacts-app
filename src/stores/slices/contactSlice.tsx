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
  contacts: [
    {
      id: 1,
      firstName: "Бекзод",
      lastName: "Тулаев",
      email: "zaynlannister@gmail.com",
      phoneNumber: "+998332488838",
      tags: ["family"],
      image: "",
    },
    {
      id: 2,
      firstName: "Джони",
      lastName: "Депп",
      email: "jonny123@gmail.com",
      phoneNumber: "+998332423438",
      tags: ["family", "friend"],
      image: "",
    },
    {
      id: 3,
      firstName: "Майкл",
      lastName: "Джексон",
      email: "michael543@gmail.com",
      phoneNumber: "+998322248883",
      tags: ["friend", "job"],
      image: "",
    },
    {
      id: 4,
      firstName: "Шафафиддиновама",
      lastName: "Джексон",
      email: "michael543@gmail.com",
      phoneNumber: "+998322248883",
      tags: ["friend", "job"],
      image: "",
    },
  ],
} as ContactsInterface;

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContact: (state) => {
      console.log(state);
    },
    deleteContact: (state) => {
      console.log(state);
    },
    editContact: (state) => {
      console.log(state);
    },
    getOneContact: (state, action) => {
      const contact = state.contacts.find(
        (item) => item.id === parseInt(action.payload)
      );
      state.contact = contact || null;
    },
  },
  extraReducers: () => {},
});

export const { createContact, deleteContact, editContact, getOneContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
