import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import store, { persistor } from "./stores/store.ts";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { PersistGate } from "redux-persist/integration/react";
import ErrorPage from "./pages/Contacts/ErrorPage.tsx";

AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: "ease-in-out",
  mirror: true,
  once: false,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "contacts/:id",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <CssBaseline />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
