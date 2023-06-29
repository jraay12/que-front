import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = sessionStorage.getItem("access_token");
  console.log(auth)
  const location = useLocation();
  return (auth) ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
