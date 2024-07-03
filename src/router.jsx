import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { catsLoader } from "./loaders/catsLoader";
import ForgotPassword from "./pages/Forgot_Password/ForgotPassword";
import VerifyMail from "./pages/VerifyMail/VerifyMail";
import Change_Password from "./pages/Change_Password/Change_Password";
import AdminConnected from "./components/ProtectedRoutes/AdminConnected";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import Profile from "./pages/Profile/Profile";
import Privacy from "./pages/Legals/Privacy/Privacy";

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
      {
        path: "/change_password/:token",
        element: <Change_Password />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminConnected>
            <Dashboard />
          </AdminConnected>
        ),
      },
      {
        path: "/profile",
        element: (
          <UserConnected>
            <Profile />
          </UserConnected>
        ),
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);
