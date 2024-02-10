import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Videos from "./routes/Videos";
import Bmi from "./routes/Bmi";
import NutritionalValue from "./routes/NutritionalValue";
import Form from "./routes/Form";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import Logout from "./components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Root />
        <Bmi />
      </Protected>
    ),
  },
  {
    path: "/details", //case insensitive
    element: (
      <Protected>
        <Root />
        <Videos />
      </Protected>
    ),
  },
  {
    path: "/bmi",
    element: (
      <Protected>
        <Root />
        <Bmi />
      </Protected>
    ),
  },
  {
    path: "/workouts",
    element: (
      <Protected>
        <Root />
        <Form />
      </Protected>
    ),
  },
  {
    path: "/Nutrition",
    element: (
      <Protected>
        <Root />
        <NutritionalValue />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: "/logout",
    element: (
      <>
        <Logout />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
