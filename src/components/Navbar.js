import Logo from "./Logo";
import { HashLink as Link } from 'react-router-hash-link';
import Social from "./Social";
import Button from "./Button";
import React from "react";

import './Navbar.css';

export default function Navbar() {
    return (
      <nav>
        <div className="nav-name-container">
          <Logo />
          <Link to="/#" className="link name">Yu Xiao</Link>
        </div>
        <div className="nav-links-container">
          <Link to="/#" className="link">Home</Link>
          <Link to="/#about" className="link">About</Link>
          <Link to="/resume#" className="link">Resume</Link>
          <Link to="/projects#" className="link">Projects</Link>
          <Link to="/art#" className="link">Art</Link>
        </div>
        <Social />
        <Button to="/#contact" class="nav-contact">Contact</Button>
        <div className="nav-menu">
          <div className="nav-menu-btn">
            <span className="nav-span"></span>
            <span className="nav-span"></span>
            <span className="nav-span"></span>
          </div>
          <div className="nav-menu-outline"></div>
        </div>
      </nav>
    );
}
