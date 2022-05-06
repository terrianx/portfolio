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
  imgMap.set(0, "182, 47%, 58%");  // samurai
  imgMap.set(1, "200, 75%, 50%");  // owl
  imgMap.set(2, "162, 85%, 40%");  // deer
  imgMap.set(3, "15, 80%, 65%");   // whale
  imgMap.set(4, "325, 60%, 75%");  // koi
  imgMap.set(5, "205, 70%, 50%");  // jelly

  const imgNum = getRandInt(0, 5);

  // state for which image to show
  const [imgShow, setImgShow] = useState(imgNum);

  useEffect(() => {
    setImgShow(imgNum);
  }, []);

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
        <p>I'm a self-learner from Greater
          Boston with a hope to make the world a 
          better place. I have experience in
          programming, front-end development,
          and graphic design studying computer
          science at the University of Michigan
          and doing independent projects.
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
        : <p className="contact-copy">&lt;Click to copy info&gt;</p>}
        
        <ContactInfo />

        <Social />

        <Button to="/#">Back to Top</Button>
      </div>

    </section>
  );
}
