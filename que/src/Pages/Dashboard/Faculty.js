import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
const Faculty = () => {
  return (
    <div className="flex max-h-screen max-w-full bg-background bg-no-repeat bg-cover">
        <Sidebar />
        <Header />
        <Outlet />
    </div>
  );
};

export default Faculty;
