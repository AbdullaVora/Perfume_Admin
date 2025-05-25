import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "/images/logo.png";
import UserDropdown from "../components/Home/UserDropdown";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-white text-black px-3 py-2 flex justify-between items-center fixed top-0 w-full shadow-md"
      style={{ zIndex: 1000, position: "fixed", backgroundColor: "white" }}>

      {/* Left Side - Logo */}
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
        </div>
      </Link>

      {/* Right Side - User Info & Dropdown */}
      <div className="flex items-center space-x-6">
        <UserDropdown /> {/* Perfectly aligned dropdown */}
      </div>
    </header>
  );
};

export default Header;
