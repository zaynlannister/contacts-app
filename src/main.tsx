import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import store from "./stores/store.ts";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

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
    errorElement: <div>Error page</div>,
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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
