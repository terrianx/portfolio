import React, { useState } from 'react';
import { 
  BrowserRouter as Router, Routes, Route, Link 
} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <main>
          <div className="box-container">
            <Nav></Nav>
            <Header></Header>
            <About></About>
            <Contact></Contact>
          </div>
        </main>
        <Routes>
          {/* include routes here */}
        </Routes>
      </Router>
    </>
  );
}

function Nav() {
  return (
    <nav>
      <div className="nav-name-container">
        <Logo></Logo>
        <a href="#" className="link">Yu Xiao</a>
      </div>
      <div className="nav-links-container">
        <a href="#" className="link">Home</a>
        <a href="#" className="link">About</a>
        <a href="#" className="link">Resume</a>
        <a href="#" className="link">Projects</a>
      </div>
      <Social></Social>
      <a href="#" className="button">Contact</a>
    </nav>
  );
}

function Logo() {
  return (
    <img src="./images/sig.png" 
          alt="Yu Xiao signature" 
          height="20" 
          className="button"
    />
  );
}

function Social() {
  return (
    <div className="social-container">
        <a href="#" className="fa fa-github"></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-instagram"></a>
      </div>
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
        <Social></Social>
        <a href="#" className="button">Contact</a>
      </div>
      <figure>
        <img src="./images/header-1.png" 
             alt="Samurai illustration"
             width="450"/>
      </figure>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>Curious and self learner with
          a hope to make the world a better
          place. I have experience in
          programming, front-end web development,
          and graphic design through my time at
          the University of Michigan studying 
          computer science and independent
          projects. I come from Greater Boston
          and am open to relocation! Check out 
          my experience and projects below:
        </p>
        <a href="#" className="button">Resume</a>
        <a href="#" className="button">Projects</a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        {/* <p>(Click below to copy)</p> */}
        <p>txiaopk@gmail.com</p>
        <p>978-888-8886</p>
        <Social></Social>
        <a href="#" className="button">Back to Top</a>
      </div>
    </section>
  );
}
