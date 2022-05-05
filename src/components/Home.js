import Social from "./Social";
import Button from "./Button";
import ContactInfo from "./ContactInfo";
import React, { useState, useEffect } from "react";

import './Home.css';

// home page components
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function Header() {
  // renders random image when user clicks
  const imgMap = new Map();
  imgMap.set(0, "hsl(182, 47%, 58%)");  // samurai
  imgMap.set(1, "hsl(200, 75%, 50%)");  // owl
  imgMap.set(2, "hsl(162, 85%, 40%)");  // deer
  imgMap.set(3, "hsl(15, 80%, 65%)");   // whale
  imgMap.set(4, "hsl(325, 60%, 75%)");  // koi
  imgMap.set(5, "hsl(205, 70%, 50%)");  // jelly

  const imgNum = getRandInt(0, 5);

  // state for which image to show
  const [imgShow, setImgShow] = useState(imgNum);

  useEffect(() => {
    setImgShow(imgNum);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--btn', imgMap.get(imgShow));
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
        <Button to="/#about">About</Button>
      </div>
      <figure onClick={() => {setImgShow((getRandInt(0, 5) + imgShow) % 6)}}>
        <img src={"./assets/header-" + imgShow + ".png"} 
              alt="Illustration"
              width="500px"/>
      </figure>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <div className="fade-box"></div>
      <span className="anchor" id="about"></span>
      <div className="about-container">
        <span className="diag-line"></span>
        <h1>About Me</h1>
        <p>Self learner and student from Greater
          Boston with a hope to make the world a 
          better place. I have experience in
          programming, front-end web development,
          and graphic design through my time at
          the University of Michigan studying 
          computer science and independent
          projects.
        </p>
        <Button to="/resume#">Resume</Button>
        <Button to="/projects#">Projects</Button>
      </div>
    </section>
  );
}

function Contact() {
  const activeClipboard = navigator.clipboard != null;

  return (
    <section className="contact">

      <span className="anchor" id="contact"></span>
      
      <div className="contact-container">
        <span className="diag-line"></span>
        <h1>Contact</h1>

        {!activeClipboard ? <></>
        : <p className="contact-copy">(click to copy info)</p>}
        
        <ContactInfo place="right" />

        <Social />

        <Button to="/#">Back to Top</Button>
      </div>

    </section>
  );
}
