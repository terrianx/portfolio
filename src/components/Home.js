import Social from "./Social";
import Button from "./Button";

import './Home.css';

// home page components
export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contact />
    </>
  );
}

function Header() {
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
      <figure>
        <img src="./assets/header-1.png" 
              alt="Samurai illustration"
              width="450px"/>
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
        <p>Curious and self learner from Greater
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
  return (
    <section className="contact">
      <span className="anchor" id="contact"></span>
      <div className="contact-container">
        <span className="diag-line"></span>
        <h1>Contact</h1>
        {/* <p>(Click below to copy)</p> */}
        <div className="info">
          <p>txiaopk@gmail.com</p>
          <p>978-888-8886</p>
        </div>
        <Social />
        <Button to="/#">Back to Top</Button>
      </div>
    </section>
  );
}
