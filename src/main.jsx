import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
const router = createBrowserRouter([

  {
    path: '/',
    element: <Header></Header>,
  },

  {
    path: 'body',
    element: <Body></Body>
  },
  {
    path: '/',
    element: <Navbar></Navbar>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
