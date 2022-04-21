import Logo from "./Logo";
import { HashLink as Link } from 'react-router-hash-link';
import Social from "./Social";
import Button from "./Button";
import React, { useState, useEffect, useCallback } from "react";
import throttle from 'lodash.throttle'

import './Navbar.css';

export default function Navbar() {
  // screen width state
  const [screenWidth, setScreenWidth] = useState(null);

  // initial screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  // listens for resized screen width
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", throttle(() => {
      handleResize();
    }, 500));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smallScreen = screenWidth <= 780;

  // nav menu state
  const [menuShow, setMenuShow] = useState(false);
  
  // automatically close nav menu if screen resized to larger
  useEffect(() => {
    if (!smallScreen) setMenuShow(false);
  }, [smallScreen]);

  // automatically close nav menu if user clicks
  useEffect(() => {
    function handleClick() {
      if (menuShow) setMenuShow(false);
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [menuShow]);

  return (
    <nav className={menuShow ? "nav-menu-show" : ""}>

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

      <div className="nav-buttons">
        <Social />
        <Button to="/#contact" 
                class="nav-contact">
          Contact
        </Button>
      </div>

      <div className="nav-menu" 
            onClick={() => setMenuShow(!menuShow)}>
        <div className="nav-menu-btn">
          <span className={menuShow ? 
            "nav-span-close nav-span" 
            : "nav-span"}></span>
          {menuShow ? 
            <></> :
            <span className="nav-span"></span>
          }
          <span className={menuShow ? 
            "nav-span-close nav-span" 
            : "nav-span"}></span>
        </div>
        <div className="nav-menu-outline"></div>
      </div>
      
      {!menuShow ?
        <></> :
        <div className="nav-buttons-show">
          <Social />
          <Button to="/#contact" 
                  class="nav-contact">
            Contact
          </Button>
        </div>
      }
    </nav>
  );
}
