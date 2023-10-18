import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import contactStateSlice from "./slices/contactStateSlice";

const rootReducer = combineReducers({
  contactsSlice: contactSlice,
  contactsStateSlice: contactStateSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
