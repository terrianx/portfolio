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
          <Link to="/#" className="link">Yu Xiao</Link>
        </div>
        <div className="nav-links-container">
          <Link to="/#" className="link">Home</Link>
          <Link to="/#about" className="link">About</Link>
          <Link to="/resume#" className="link">Resume</Link>
          <Link to="/projects#" className="link">Projects</Link>
        </div>
        <Social />
        <Button to="/#contact" class="nav-contact">Contact</Button>
        <div className="nav-resize">
          <span className="nav-span"></span>
          <span className="nav-span"></span>
          <span className="nav-span"></span>
        </div>
      </nav>
    );
}