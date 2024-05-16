import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { catsLoader } from "./loaders/catsLoader";
import ForgotPassword from "./pages/Forgot_Password/ForgotPassword";
import VerifyMail from "./pages/VerifyMail/VerifyMail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: catsLoader,
        element: <Homepage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify_mail/:token",
        element: <VerifyMail />,
      },
    ],
  },
]);
