import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function AdminConnected({ children }) {
  const { user } = useContext(UserContext);
  console.log("DASHBOARD");
  console.log(user);
  return user ? { children } : <Navigate to="/" />;
}
