import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import contactStateSlice from "./slices/contactStateSlice";
import searchSlice from "./slices/searchSlice";
import filterSlice from "./slices/filterSlice";

const rootReducer = combineReducers({
  contactsSlice: contactSlice,
  contactsStateSlice: contactStateSlice,
  searchSlice: searchSlice,
  filterSlice: filterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
