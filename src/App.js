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
        <div className="button-container">
          <img src="./assets/sig.png" 
              alt="Yu Xiao signature" 
              height="20px" 
              className="logo"/>
          <img src="./assets/sig.png" 
              alt="Yu Xiao signature outline" 
              height="20px" 
              className="outline"/>
        </div>
      </Link>
    </div>
  );
}

function Social() {
  return (
    <div className="social-container">
      <div className="social-button">
        <a className="fa fa-github"
          href="https://github.com/ytxpk" 
          target="_blank"></a>
        <p className="social-outline"></p>
      </div>
      <div className="social-button">
        <a className="fa fa-linkedin"
          href="https://www.linkedin.com/in/yuxiao8/" 
          target="_blank"></a>
        <p className="social-outline"></p>
      </div>
      <div className="social-button">
        <a className="fa fa-instagram"
          href="https://www.instagram.com/tx_pk/" 
          target="_blank"></a>
        <p className="social-outline"></p>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div className="button-container">
      <Link to={props.to} className="button">{props.children}</Link>
      <p className="outline">{props.children}</p>
    </div>
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

// resume page component
function Resume() {
  return (
    <section className="resume">
      <span className="diag-line"></span>
      <h1>Resume</h1>
      <div className="button-container">
        <a href="./assets/YuXiaoResume.pdf" 
          download="YuXiaoResume"
          className="button">Download</a>
        <p className="outline">Download</p>
      </div>
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
          <li>- Hellow</li>
          <li>- bob</li>
          <li>- yo</li>
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
      <div className="button-container">
        <a href={props.site} 
          className="button" 
          target="_blank">Site</a>
        <p className="outline">Site</p>
      </div>
      <div className="button-container">
        <a href={props.code} 
          className="button" 
          target="_blank">Code</a>
        <p className="outline">Code</p>
      </div>
      <p>Technology used: {props.tech}</p>
      <div>{props.children}</div>
    </div>
  );
}
