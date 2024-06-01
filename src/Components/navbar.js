import React, { useState } from "react";
import Logo from "../Assets/MindfulLogo.png";
import { Link } from "react-scroll";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar flex justify-between items-center">
      <img src={Logo} alt="Mindful Logo" className="w-28 h-28 ml-3 icontop" />
      <div className="menu-icon md:hidden" onClick={toggleMenu}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
      <div
        className={`menu-links ${
          isOpen ? "open" : ""
        } md:flex flex-row justify-end items-center w-1/2`}
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-lg font-semibold cursor-pointer"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="who-we-are"
          smooth={true}
          duration={500}
          className="text-lg font-semibold cursor-pointer"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          to="mobile-section"
          smooth={true}
          duration={500}
          className="text-lg font-semibold cursor-pointer"
          onClick={toggleMenu}
        >
          Features
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
