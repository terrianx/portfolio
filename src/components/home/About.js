// ==========================================
// COMPONENT: About section
// OVERVIEW:  Fades header on scroll,
//            About me description,
//            Internal resume, project links,
// USAGE:     HomePage
// ==========================================

import Button from "../button/Button";

import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="fade-box"></div>
      <div className="cover-box"></div>

      <div className="about-skew-container">
        <div className="about-container">
          <span className="diag-line" id="about"></span>

          <h1>About Me</h1>

          <p>
            I'm a computer science student studying
            at the University of Michigan from the
            Greater Boston area. My hope
            is to make our world a safer and more
            beautiful place to live in. I 
            enjoy programming, illustrating,
            board games, and hiking. Explore my 
            projects and art at the links below.
          </p>

          <Button to="/projects#">Projects</Button>
          <Button to="/gallery#">Gallery</Button>

        </div>
      </div>
    </section>
  );
}
