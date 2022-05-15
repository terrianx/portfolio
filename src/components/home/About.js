// ==========================================
// COMPONENT: About section
// OVERVIEW:  Fades header on scroll,
//            About me description,
//            Internal resume, project links,
// USAGE:     HomePage
// ==========================================

import Button from "../button/Button.js";

import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="fade-box"></div>

      <span className="anchor" id="about"></span>

      <div className="about-container">
        <span className="diag-line"></span>

        <h1>About Me</h1>

        <p>I'm a self-learner from Greater
          Boston with a mindset of making the world 
          a better place. I have experience in
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
