import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/hobbies">Hobbies</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
