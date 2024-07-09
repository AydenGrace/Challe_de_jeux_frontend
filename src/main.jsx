import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Toaster position="nottom-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </>

  // {/* </React.StrictMode> */}
);
