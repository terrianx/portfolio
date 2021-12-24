import React, { useState, useRef } from 'react';
import { 
  BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Nav />
          <div className="box-container">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/resume"><Resume /></Route>
              <Route exact path="/projects"><Resume /></Route>
            </Switch>
          </div>
          <Footer />
        </main>
      </Router>
    </>
  );
}

// general components
function Nav() {
  return (
    <nav>
      <div className="nav-name-container">
        <Logo />
        <Link to="/#" className="link">Yu Xiao</Link>
      </div>
      <div className="nav-links-container">
        <Link to="/#" className="link">Home</Link>
        <Link to="/#about" className="link">About</Link>
        <Link to="/resume" className="link">Resume</Link>
        <Link to="/projects" className="link">Projects</Link>
      </div>
      <Social />
      <Button to="/#contact" text="Contact" />
    </nav>
  );
}

function Logo() {
  return (
    <div>
      <Link to="/#">
        <img src="./assets/sig.png" 
            alt="Yu Xiao signature" 
            height="20" 
            className="logo"/>
      </Link>
    </div>
  );
}

function Social() {
  return (
    <div className="social-container">
      <a className="fa fa-github"
         href="https://github.com/ytxpk" 
         target="_blank"></a>
      <a className="fa fa-linkedin"
         href="https://www.linkedin.com/in/yuxiao8/" 
         target="_blank"></a>
      <a className="fa fa-instagram"
         href="https://www.instagram.com/tx_pk/" 
         target="_blank"></a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/#"><h1 className="footer-name">Yu Xiao</h1></Link>
        <div className="footer-item">
          <h1>Navigation</h1>
          <ul>
            <li><Link to="/#" className="link">Home</Link></li>
            <li><Link to="/#about" className="link">About</Link></li>
            <li><Link to="/resume" className="link">Resume</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
          </ul>
        </div>
        <div className="footer-item">
          <h1>Social</h1>
          <ul>
            <li><a href="https://github.com/ytxpk" 
                   target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yuxiao8/" 
                   target="_blank">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/tx_pk/" 
                   target="_blank">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h1>Contact</h1>
          <ul>
            <li><p>txiaopk@gmail.com</p></li>
            <li><p>978-888-8886</p></li>
          </ul>
        </div>
        <p className="copyright">© Yu Xiao 2021. All rights reserved</p>
      </div>
    </footer>
  );
}

// home page components
function Home() {
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
        <Button to="/#contact" text="Contact" />
      </div>
      <figure>
        <img src="./assets/header-1.png" 
             alt="Samurai illustration"
             width="450"/>
      </figure>
    </header>
  );
}

function About() {
  return (
    <>
      <span className="anchor" id="about"></span>
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
          <Button to="/resume" text="Resume" />
          <Button to="/projects" text="Projects" />
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <span className="anchor" id="contact"></span>
      <section className="contact">
        <div className="contact-container">
          <h1>Contact</h1>
          {/* <p>(Click below to copy)</p> */}
          <p>txiaopk@gmail.com</p>
          <p>978-888-8886</p>
          <Social />
          <Button to="/#" text="Back to Top" />
        </div>
      </section>
    </>
  );
}

// resume page components
function Resume() {
  return (
    <>
      <Contact />
    </>
  );
}

function Button(props) {
  return (
    <Link to={props.to} className="button">{props.text}</Link>
  );
}
