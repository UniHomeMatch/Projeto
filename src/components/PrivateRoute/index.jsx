import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticate = () => localStorage.getItem('Yt');

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticate()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;