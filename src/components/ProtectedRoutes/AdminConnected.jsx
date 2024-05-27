import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function AdminConnected({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return user.role.power < 0 ? children : <Navigate to="/" />;
}
