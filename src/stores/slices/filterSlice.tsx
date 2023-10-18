import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    familyChecked: false,
    friendChecked: false,
  },
  reducers: {
    setFamilyChecked: (state, action) => {
      state.familyChecked = action.payload;
    },
    setFriendChecked: (state, action) => {
      state.friendChecked = action.payload;
    },
  },
});

export const { setFamilyChecked, setFriendChecked } = filterSlice.actions;
export default filterSlice.reducer;
