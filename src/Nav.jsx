import React from "react";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Will Nahley</span>
      </div>

      <div className="navbar-right">
        <a href="https://www.instagram.com/willnahley/">Instagram</a>
        <a href="https://www.linkedin.com/in/will-nahley/">LinkedIn</a>
        <a href="#resume">Resume</a>
        <a href="#projectsa">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
