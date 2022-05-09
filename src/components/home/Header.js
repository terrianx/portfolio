// ==========================================
// COMPONENT: Header
// OVERVIEW:  Random header art on click,
//            Link to social media
// USAGE:     HomePage
// ==========================================

import { useState, useEffect } from 'react';
import Social from '../contact/Social';
import Button from '../button/Button';

import './Header.css';

export default function Header() {
  // image to button color mapping 
  const imgMap = new Map();
  imgMap.set(0, "182, 47%, 58%");  // samurai
  imgMap.set(1, "200, 75%, 50%");  // owl
  imgMap.set(2, "162, 85%, 40%");  // deer
  imgMap.set(3, "15, 80%, 65%");   // whale
  imgMap.set(4, "325, 60%, 75%");  // koi
  imgMap.set(5, "205, 70%, 50%");  // jelly

  const imgNum = getRandInt(0, 5);

  // state for which image to show
  const [imgShow, setImgShow] = useState(imgNum);

  // set button and highlight color
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--btn', 'hsl(' + imgMap.get(imgShow) + ')');
    document.documentElement.style.setProperty(
      '--highlight', 'hsla(' + imgMap.get(imgShow) + ', 75%)');
  }, [imgShow]);

  return (
    <header>
      <div className="intro-container">
        <h1>Hi, I'm Yu Xiao.</h1>

        <p>
          A curious programmer and artist 
          with a heart to better the world 
          through technology.
        </p>

        <Social />

        <Button to="/#contact">Contact</Button>

      </div>

      <figure onClick={() => {
          setImgShow((getRandInt(0, 5) + imgShow) % 6)}}>
        <img src={"./assets/header-" + imgShow + ".webp"} 
              alt="Illustration"
              width="500px"
              height="auto"/>
      </figure>

    </header>
  );
}

// returns random integer between min and max inclusive
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}
