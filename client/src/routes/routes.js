import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};
