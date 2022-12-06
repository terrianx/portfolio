// ==========================================
// COMPONENT: Navigation bar
// OVERVIEW:  Responsive to window resizing,
//            Hamburger menu on mobile screen,
//            Links to all pages and social
// USAGE:     App
// ==========================================

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';
import Button from '../button/Button';
import Social from '../contact/Social';
import throttle from 'lodash.throttle'

import './SINavbar.css';

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

    // throttle to improve performance
    window.addEventListener("resize", throttle(() => {
      handleResize();
    }, 700));
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
        <HashLink to="/#" className="link name">Terrian Xiao</HashLink>
      </div>

      <div className="nav-links-container">
        <HashLink to="/#" className="link">Home</HashLink>
        <HashLink to="/#about" className="link">About</HashLink>
        <NavLink to="/resume#" className="link">Resume</NavLink>
        <NavLink to="/projects#" className="link">Projects</NavLink>
        <NavLink to="/gallery#" className="link">Gallery</NavLink>
      </div>

      <div className="nav-buttons">
        <Social />
        <Button to="/#contact" 
                class="nav-contact">
          Contact
        </Button>
      </div>

      <div className="nav-menu" onClick={() => setMenuShow(!menuShow)}>
        <div className="nav-menu-btn">
          <span className={menuShow ? 
            "nav-span-close nav-span" 
            : "nav-span"}></span>

          {menuShow ? <></> 
            : <span className="nav-span"></span>}

          <span className={menuShow ? 
            "nav-span-close nav-span" 
            : "nav-span"}></span>
        </div>
        
        <div className="nav-menu-outline"></div>
      </div>
      
      {!menuShow ? <></> :
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
