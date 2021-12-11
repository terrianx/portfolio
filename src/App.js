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
          <Footer></Footer>
        </main>
        <Routes>
          {/* include routes here */}
        </Routes>
      </Router>
    </>
  );
}

function Button(props) {
  return (
    <a href={props.href} className="button">{props.text}</a>
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
      <Button href="#" text="Contact"></Button>
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
        <Button href="#" text="Resume"></Button>
        <Button href="#" text="Projects"></Button>
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
        <Button href="#" text="Back to Top"></Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1 className="footer-name">Yu Xiao</h1>
        <div className="footer-item">
          <h1>Navigation</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h1>Social</h1>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h1>Contact</h1>
          <ul>
            <li><a href="#">txiaopk@gmail.com</a></li>
            <li><a href="#">978-888-8886</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
