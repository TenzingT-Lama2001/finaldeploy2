import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
const MainHeader = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[full]  px-4 gap-10 ">
      <img src={Logo} className="w-[80px] " />
      <ul className="hidden md:flex font-semibold gap-10 ">
        <li className="p-4">Home</li>
        <li className="p-4">Features</li>
        <li className="p-4">Download</li>
        <li className="p-4">About</li>
      </ul>
      <button className="font-semibold ml-auto mr-10">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default MainHeader;
