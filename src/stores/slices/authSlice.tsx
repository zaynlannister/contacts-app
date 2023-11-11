import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  phoneNumber: string;
}

interface AuthInterface {
  isLogged: boolean;
  user: User | null;
}

const initialState: AuthInterface = {
  isLogged: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
  extraReducers: () => {},
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
