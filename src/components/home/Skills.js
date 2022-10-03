// ==========================================
// COMPONENT: Skills section
// OVERVIEW:  responsive tech icons layout for skills
// USAGE:     HomePage
// ==========================================

import Button from '../button/Button';
import SkillsIcon from './SkillsIcon';

import './Skills.css';

export default function Skills() {
  return(
    <section className="skills">
      <span className="diag-line"></span>

      <h1>My Skills</h1>
      
      <p>
        Skills I gained from industry, education, 
        and independent projects. Check out my resume
        to see how I learned and honed each skill.
      </p>

      <Button to="/resume#">Resume</Button>

      <div className="skills-container">
        <div className="skills-category">
          <h2>Languages</h2>
          <SkillsIcon file="cpp" width="30">C++</SkillsIcon>
          <SkillsIcon file="python" width="30">Python</SkillsIcon>
          <SkillsIcon file="js" width="30">Javascript</SkillsIcon>
        </div>

        <div className="skills-category">
          <h2>Web</h2>
          <SkillsIcon file="react" width="35">React</SkillsIcon>
          <SkillsIcon file="html" width="30">HTML</SkillsIcon>
          <SkillsIcon file="css" width="30">CSS</SkillsIcon>
        </div>

        <div className="skills-category">
          <h2>Tools</h2>
          <SkillsIcon file="git" width="30">Git</SkillsIcon>
          <SkillsIcon file="figma" width="25">Figma</SkillsIcon>
          <SkillsIcon file="jira" width="30">Jira</SkillsIcon>
        </div>

        <div className="skills-category">
          <h2>Design</h2>
          <SkillsIcon file="designer" width="30">Designer</SkillsIcon>
          <SkillsIcon file="illustrator" width="30">Illustrator</SkillsIcon>
        </div>
      </div>

    </section>
  );
}
