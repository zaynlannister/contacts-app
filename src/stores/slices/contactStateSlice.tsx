import { createSlice } from "@reduxjs/toolkit";

interface ContactsStateInterface {
  activeContactId: number | null;
}

const initialState: ContactsStateInterface = {
  activeContactId: null,
};

export const contactsSlice = createSlice({
  name: "contactsState",
  initialState,
  reducers: {
    setActiveContact: (state, action) => {
      state.activeContactId = action.payload;
    },
    clearActiveContact: (state) => {
      state.activeContactId = null;
    },
  },
  extraReducers: () => {},
});

export const { setActiveContact, clearActiveContact } = contactsSlice.actions;
export default contactsSlice.reducer;
