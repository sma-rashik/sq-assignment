import React from "react";
import Home from "../Components/Home/Home";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navigation from "../Components/Navigation/Navigation";
import Layerone from "../Components/Layerone/Layerone";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="flex relative">
      <div className="">
        <Sidebar></Sidebar>
      </div>

      <div className="flex-grow">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
