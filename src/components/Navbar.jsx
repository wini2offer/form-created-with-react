// Navbar.js
import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/productpage">Products</a>
        </li>
        <li className="nav-item">
          <a href="/loginpage">Login</a>
        </li>
        <li className="nav-item">
          <a href="/aboutpage">About</a>
        </li>
        <li className="nav-item">
          <a href="/registerpage">Register</a>
        </li>
        <li className="nav-item">
          <a href="/contactpage">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
