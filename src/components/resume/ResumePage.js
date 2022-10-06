// ==========================================
// COMPONENT: Resume page
// OVERVIEW:  View and download options,
//            Responsive to resizing
// USAGE:     App
// ==========================================

import Button from '../button/Button';
import ButtonAnchor from '../button/ButtonAnchor';
import SpanText from './SpanText';
import DateFormat from './DateFormat';
import ListItem from '../list/ListItem';

import './ResumePage.css';

export default function Resume() {
  const docsLink = "https://docs.google.com/document/d/1nbQazofCaG4IDDKqkxuGsQwWesm8ukUOMQkvfN5GGk8/edit?usp=sharing";
  const degree = "Bachelor of Science in Engineering in Computer Science";
  const coursework = "Data Structures and Algorithms, Web Systems, Compiler Construction, Computer Organization";

  return (
    <section className="resume-page">
      <span className="diag-line"></span>

      <h1 className="title">Resume</h1>

      <ButtonAnchor to={docsLink}>View in Docs</ButtonAnchor>
      <ButtonAnchor to="./assets/resume/Terrian_Xiao_Resume.pdf"
                    download="Terrian_Xiao_Resume">
                    Download
      </ButtonAnchor>

      <div className="resume-content-container">
        <div className="resume-content">
          <section className="resume-content-head">
            <h1>Terrian Xiao</h1>

            <p>978-888-8886 | txiaopk@gmail.com | Westford, MA</p>

            <span>
              <a className="multi-word"
                href="https://terrianx.netlify.app" 
                target="_blank"
                rel="noreferrer">
                terrianx.netlify.app
              </a>
              <p>&nbsp;|&nbsp;</p>
              <a className="multi-word"
                href="https://linkedin.com/in/terrianx" 
                target="_blank"
                rel="noreferrer">
                linkedin.com/in/terrianx
              </a>
              <p>&nbsp;|&nbsp;</p>
              <a className="multi-word"
                href="https://github.com/terrianx" 
                target="_blank"
                rel="noreferrer">
                github.com/terrianx
              </a>
            </span>
          </section>

          <section className="resume-content-section">
            <h2>EDUCATION</h2>
            <h3>University of Michigan, Ann Arbor MI</h3>
            <DateFormat title={degree}>Graduating April 2024</DateFormat>
            <SpanText title="GPA">3.89/4.00</SpanText>
            <SpanText title="Coursework">{coursework}</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>SKILLS</h2>
            <SpanText title="Languages">C++, Python, Javascript, Rust</SpanText>
            <SpanText title="Web">React, HTML, CSS, Flask, SQL</SpanText>
            <SpanText title="Tools">Git, Jira, Figma, Adobe Illustrator</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>WORK EXPERIENCE</h2>
            <div className="resume-content-block">
              <h3>Mathworks, Natick MA</h3>
              <DateFormat title="Software Engineer Intern">May 2022 - August 2022</DateFormat>
              <ul>
                <ListItem>Engineered dead code elimination compiler optimization to improve performance of generated MATLAB and Simulink code using C++</ListItem>
                <ListItem>Qualifed compiler transform robustness and speed by conducting 20,000+ unit, integration, and system tests using automated testing frameworks</ListItem>
                <ListItem>Developed 85+ unit tests following test driven development practices to ensure code functionality</ListItem>
                <ListItem>Communicated progress in agile software development environment to align and review project updates using Jira</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Freelance</h3>
              <DateFormat title="Graphic Designer">July 2016 - August 2022</DateFormat>
              <ul>
                <ListItem>Illustrated, marketed, and distributed 30+ custom decks of playing cards utilizing Adobe Illustrator</ListItem>
                <ListItem>Negotiated contracts with clients to create illustrations, logos, posters, and graphics</ListItem>
              </ul>
            </div>
          </section>

          <section className="resume-content-section">
            <h2>PROJECTS</h2>

            <div className="resume-content-block">
              <h3>Technical Course Projects</h3>
              <DateFormat title="Fullstack Instagram Clone">September 2022 - October 2022</DateFormat>
              <ul>
                <ListItem>Created fullstack Instagram application using React front end, Python Flask backend, and SQL database to serve and render login, feed, accounts, posts, and users pages</ListItem>
                <ListItem>Built client side dynamic pages using REST API and asynchronous programming to manage requests using HTTP</ListItem>
                <ListItem>Implemented interactive account, posting, liking, and commenting features to enhance user experience</ListItem>
                <ListItem>Collaborated with software engineering team of 3 using Git version control</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <DateFormat title="Cobra Compiler">September 2022 - October 2022</DateFormat>
              <ul>
                <ListItem>Designed compiler to generate x64 assembly from functional like programming language using Rust</ListItem>
                <ListItem>Constructed compile and run time error checks for unbounded variables, duplicate bindings, and type mismatches</ListItem>
                <ListItem>Implemented expression evaluation algorithms featuring conditionals, scoping, variables, binary operations, and types</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Front End Development</h3>
              <DateFormat title="Portfolio Website">November 2021 - July 2022</DateFormat>
              <ul>
                <ListItem>Created 4 page responsive personal portfolio website with mobile friendly design using React, HTML, CSS</ListItem>
                <ListItem>Constructed wireframes and mockups of interfaces to scope and design user interfaces using Figma</ListItem>
                <ListItem>Enhanced performance, accessibility, best practices, and search engine optimization to achieve 90-100 on Google Lighthouse benchmark tests</ListItem>
              </ul>
            </div>            
          </section>

        </div>
      </div>

      <Button to="/resume#">Back to Top</Button>
    </section>
  );
}
