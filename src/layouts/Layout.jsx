import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import MainFooter from "./footer/MainFooter";
import MainHeader from "./header/MainHeader";
const Layout = () => {
  return (
    <main className="App">
      <MainHeader className="sticky top-0 z-10" />
      <Outlet />
      <MainFooter />
    </main>
  );
};

export default Layout;
