import contactSlice from "./slices/contactSlice";
import contactStateSlice from "./slices/contactStateSlice";
import searchSlice from "./slices/searchSlice";
import filterSlice from "./slices/filterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  contactsSlice: contactSlice,
  contactsStateSlice: contactStateSlice,
  searchSlice: searchSlice,
  filterSlice: filterSlice,
  authSlice: authSlice,
});

export default persistReducer(
  { key: "root", storage, whitelist: ["contactsSlice", "authSlice"] },
  rootReducer
);
