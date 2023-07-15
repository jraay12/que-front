import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

const ProtectedRoute = () => {
  let auth = secureLocalStorage.getItem("access_token");
  const location = useLocation();
  return (auth) ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );

  
};

export default ProtectedRoute;
