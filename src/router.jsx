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
import Booking_success from "./pages/Booking/Success/Booking_success";
import Booking_failed from "./pages/Booking/Failed/Booking_failed";
import Booking_history from "./pages/Booking_History/Booking_history";
import Manage_Sessions from "./pages/Dashboard/subpages/Manage_Sessions/Manage_Sessions";
import Manage_Rooms from "./pages/Dashboard/subpages/Manage_Rooms/Manage_Rooms";
import Manage_Users from "./pages/Dashboard/subpages/Manage_Users/Manage_Users";
import Dashboard_Main from "./pages/Dashboard/subpages/Dashboard_Main/Dashboard_Main";
import Manage_Cats from "./pages/Dashboard/subpages/Manage_Cats/Manage_Cats";
import Profile_Security from "./pages/Profile/subpages/Security/Profile_Security";
import Profile_Personnal from "./pages/Profile/subpages/Personnal/Profile_Personnal";

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
        children: [
          {
            index: 1,
            element: <Dashboard_Main />,
          },
          {
            path: "manage_cats",
            element: <Manage_Cats />,
          },
          {
            path: "manage_sessions",
            element: <Manage_Sessions />,
          },
          {
            path: "manage_rooms",
            element: <Manage_Rooms />,
          },
          {
            path: "manage_users",
            element: <Manage_Users />,
          },
        ],
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
        path: "/profile/security",
        element: <Profile_Security />,
      },
      {
        path: "/profile/personnal",
        element: <Profile_Personnal />,
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
        path: "/booking_success/:reservation",
        element: <Booking_success />,
      },
      {
        path: "/booking_failed/:reservation",
        element: <Booking_failed />,
      },
      {
        path: "/profile/history",
        element: (
          <UserConnected>
            <Booking_history />
          </UserConnected>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
