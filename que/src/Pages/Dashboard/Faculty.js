import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
const Faculty = () => {
  return (
    <div className="flex max-h-screen">
        <Sidebar />
        <Outlet />
    </div>
  );
};

export default Faculty;
