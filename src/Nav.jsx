import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import linkedIcon from "../assets/linkedin_icon.png";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Will Nahley</span>
      </div>

      <div className="navbar-right">
        <a href="https://www.instagram.com/willnahley/">
          <img className="icon" src={instaIcon} />
        </a>
        <a href="https://www.linkedin.com/in/will-nahley/">
          <img className="icon" src={linkedIcon} />
        </a>
        <a href="#resume">Resume</a>
        <a href="#projectsa">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
