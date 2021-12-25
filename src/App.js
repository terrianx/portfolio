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
              <Route exact path="/projects"><Projects /></Route>
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
        <Link to="/resume#" className="link">Resume</Link>
        <Link to="/projects#" className="link">Projects</Link>
      </div>
      <Social />
      <Button to="/#contact">Contact</Button>
    </nav>
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
            <li><Link to="/resume#" className="link">Resume</Link></li>
            <li><Link to="/projects#" className="link">Projects</Link></li>
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

function Logo() {
  return (
    <div>
      <Link to="/#">
        <img src="./assets/sig.png" 
            alt="Yu Xiao signature" 
            height="20px" 
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

function Button(props) {
  return (
    <Link to={props.to} className="button">{props.children}</Link>
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
        <Button to="/#contact">Contact</Button>
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
          <Button to="/#">Back to Top</Button>
        </div>
      </section>
    </>
  );
}

// resume page component
function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <a href="./assets/YuXiaoResume.pdf" 
         download="YuXiaoResume"
         className="button">Download</a>
      <embed src="./assets/YuXiaoResume.pdf#toolbar=0"
            type="application/pdf"
            width="825px"
            height="1064px"
            className="resume-pdf"/>
    </section>
  );
}

// project page components
function Projects() {
  return (
    <section className="projects">
      <Project title="FreshTea Website"
               src="./assets/FreshTea.png"
               width="600px"
               alt="FreshTea Website home page"
               site="https://yu-xiao-boba-shop.netlify.app/index.html"
               code="https://github.com/ytxpk/boba-website"
               tech=" HTML, CSS, JS">
        <p>Hihihihihi hihihihihihihi</p>
        <ul>
          <li>Hellow</li>
          <li>bob</li>
          <li>yo</li>
        </ul>
      </Project>
    </section>
  );
}

function Project(props) {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      <img src={props.src} alt={props.alt} width={props.width}/>
      <Button to={props.site}>Site</Button>
      <Button to={props.code}>Code</Button>
      <p>Technology used: {props.tech}</p>
      <div>{props.children}</div>
    </div>
  );
}
