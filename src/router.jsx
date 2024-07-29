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
import Cgv from "./pages/Legals/CGV/Cgv";
import Mentions from "./pages/Legals/Mentions/Mentions";
import Cat from "./pages/Cat/Cat";
import Residents from "./pages/Residents/Residents";
import { homepageLoader } from "./loaders/homepageLoader";
import Rooms from "./pages/Rooms/Rooms";
import { roomsLoader } from "./loaders/roomsLoader";
import Booking from "./pages/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: homepageLoader,
        element: <Homepage />,
      },
      {
        path: "/cats",
        loader: catsLoader,
        element: <Residents />,
      },
      {
        path: "/rooms",
        loader: roomsLoader,
        element: <Rooms />,
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
      {
        path: "/cat/:id",
        element: <Cat />,
      },
      {
        path: "/cgv",
        element: <Cgv />,
      },
      {
        path: "/legals",
        element: <Mentions />,
      },
      {
        path: "/booking/:session",
        element: <Booking />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
