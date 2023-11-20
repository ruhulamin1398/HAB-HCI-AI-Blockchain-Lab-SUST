import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Componenets/Footer";
import Nav from "./Componenets/Nav";
import "./assets/customjs";
const Layout = () => {
  const currentPath = window.location.pathname;
  return (
    <>
      <Nav />

      <div className="min-h-[500px] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
