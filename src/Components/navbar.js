import React from "react";
import Logo from "../Assets/MindfulLogo.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-center items-center">
      <img src={Logo} alt="Mindful Logo" className="w-28 h-28" />
    </div>
  );
};
export default Navbar;
