// ==========================================
// COMPONENT: Splash
// OVERVIEW:  Random splash art on click,
//            Link to social media
// USAGE:     HomePage
// ==========================================

import { useState, useEffect } from 'react';
import Social from '../contact/Social';
import Button from '../button/Button';

import './Splash.css';

export default function Splash() {
  // image to button color mapping 
  let imgMap = new Map();
  imgMap.set(0, [182, 47, 58]);  // samurai
  imgMap.set(1, [200, 75, 50]);  // owl
  imgMap.set(2, [162, 85, 40]);  // deer
  imgMap.set(3, [15, 80, 65]);   // whale
  imgMap.set(4, [330, 70, 80]);  // koi
  imgMap.set(5, [205, 70, 50]);  // jelly

  const imgNum = getRandInt(0, 5);

  // state for which image to show
  const [imgShow, setImgShow] = useState(imgNum);

  // set button and highlight color
  useEffect(() => {
    const color = imgMap.get(imgShow);
    document.documentElement.style.setProperty(
      '--btn', 'hsl(' + color[0] + ', ' 
                      + color[1] + '%, ' 
                      + color[2] + '%)');
    document.documentElement.style.setProperty(
      '--btn-light', 'hsl(' + color[0] + ', ' 
                            + (color[1] - 15) + '%, ' 
                            + (color[2] + 15) + '%)');
    document.documentElement.style.setProperty(
      '--highlight', 'hsla(' + color[0] + ', ' 
                             + color[1] + '%, ' 
                             + color[2] + '%, '
                             + '75%)');
  // eslint-disable-next-line
  }, [imgShow]);

  return (
    <div className="splash">
      <div className="intro-container">
        <h1>Hi, I'm <span className="multi-word">Terrian Xiao.</span></h1>

        <p>
          A curious programmer and artist 
          with a heart to make the world 
          more beautiful.
        </p>

        <Social />
        <Button to="/#contact">Contact</Button>

      </div>

      <figure onClick={() => {
          setImgShow((getRandInt(0, 5) + imgShow) % 6)}}>
        <img src={"./assets/splash/splash-" + imgShow + ".webp"} 
              alt="Illustration"
              width="500px"
              height="auto"/>
      </figure>

    </div>
  );
}

// returns random integer between min and max inclusive
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}
