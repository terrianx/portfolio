// ==========================================
// COMPONENT: Skills section
// OVERVIEW:  
// USAGE:     HomePage
// ==========================================

import Button from '../button/Button';

import './Skills.css';

export default function Skills() {
  return(
    <section className="skills">
      <span className="diag-line"></span>

      <h1>My Skills</h1>
      
      <p>
        Skills I gained from education
        and independent projects. Check out my resume
        to see how I learned and honed each skill.
      </p>

      <Button to="/resume#">Resume</Button>

      <div className="skills-container">
        <div className="proficient-container">
          <h2>Proficient</h2>

          <figure>
              <img src="./assets/icon-cpp.webp"
                  alt="c/c++ icon"
                  width="70"/>
              <figcaption>C/C++</figcaption>
          </figure>

          <figure>
            <img src="./assets/icon-html.webp"
                alt="html icon"
                width="70"/>
            <figcaption>HTML</figcaption>
          </figure>

          <figure>
            <img src="./assets/icon-affinity.webp"
                alt="affinity designer icon"
                width="80"/>
            <figcaption className="multi-word">
                        Affinity Designer
            </figcaption>
          </figure>

        </div>

        <div className="competent-container">
          <h2>Competent</h2>

          <figure>
            <img src="./assets/icon-react.webp"
                alt="react icon"
                width="80"/>
            <figcaption>React</figcaption>
          </figure>

          <figure>
            <img src="./assets/icon-css.webp"
                alt="css icon"
                width="70"/>
            <figcaption>CSS</figcaption>
          </figure>

          <figure>
            <img src="./assets/icon-js.webp"
                alt="javascript icon"
                width="80"/>
            <figcaption>Javascript</figcaption>
          </figure>

        </div>

        <div className="capable-container">
          <h2>Capable</h2>

          <figure>
            <img src="./assets/icon-python.webp"
                alt="python icon"
                width="80"/>
            <figcaption>Python</figcaption>
          </figure>

          <figure>
            <img src="./assets/icon-illustrator.webp"
                alt="adobe illustrator icon"
                width="80"/>
            <figcaption className="multi-word">
                        Adobe Illustrator
            </figcaption>
          </figure>
        </div>

      </div>

    </section>
  );
}
