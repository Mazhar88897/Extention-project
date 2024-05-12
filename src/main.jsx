import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import Support from "./components/support/support.jsx";
import History from "./components/history/history.jsx";
import SignIn from "./components/signin-and-signup/SignIn.jsx";
import SignUp from "./components/signin-and-signup/SignUp.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Mode from "./components/color-mode/Mode.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Mode />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
