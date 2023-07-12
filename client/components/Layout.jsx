
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
    <div id="wrapper">
        <Header />
        <SideBar />
        {children}
    </div>
    </>
  );
};
  
export default Layout;