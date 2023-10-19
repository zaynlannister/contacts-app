import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

let middleWares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWares = [...middleWares, logger];
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: middleWares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
