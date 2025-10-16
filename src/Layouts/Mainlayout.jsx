import React from "react";
import Header from "../Components/Header/Index";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Index";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
