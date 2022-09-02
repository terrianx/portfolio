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
  const docsLink = "https://docs.google.com/document/d/1dzezVXBeR3F51SwQakOBWzYdLGJzYSBoqBi2qi53aLs/edit?usp=sharing";
  const degree = "Bachelor of Science in Engineering in Computer Science";
  const coursework = "Data Structures and Algorithms, "
                   + "Web Systems, "
                   + "Computer Organization, "
                   + "Discrete Mathematics, "
                   + "Technical Communication, "
                   + "Codepath Software Engineering";

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
            <SpanText title="Languages">C/C++, Python, Javascript</SpanText>
            <SpanText title="Web">React, HTML, CSS</SpanText>
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
                <ListItem>Communicated progress in biweekly meetings in an agile software development environment methodology to align and review project updates</ListItem>
              </ul>
            </div>
            
            <div className="resume-content-block">
              <h3>Graphic Design</h3>
              <DateFormat title="Digital Artwork Freelancer">July 2016 - August 2022</DateFormat>
              <ul>
                <ListItem>Designed and distributed 30+ custom decks of playing cards utilizing Adobe Illustrator</ListItem>
                <ListItem>Produced content for 50+ Asian Intervarsity members as a Graphics Team Member to communicate events through social platforms</ListItem>
                <ListItem>Negotiated contracts with clients to create illustrations, logos, posters utilizing Adobe Illustrator</ListItem>
              </ul>
            </div>
          </section>

          <section className="resume-content-section">
            <h2>PROJECTS</h2>
            <div className="resume-content-block">
              <h3>Technical Course Projects</h3>
              <DateFormat title="Log Entries Manager">October 2021 - November 2021</DateFormat>
              <ul>
                <ListItem>Created log management system utilizing hash maps to perform sorting, appending, deleting, searching on log entries using object oriented programming in C++</ListItem>
                <ListItem>Implemented keyword search feature to efficiently filter entries by category and search words using hash map</ListItem>
                <ListItem>Designed custom functors to manage entries of log objects using STL functions</ListItem>
                <ListItem>Utilized test driven development and Makefiles to automate testing and running software</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <DateFormat title="Air Quality Monitor">January 2021 - April 2021</DateFormat>
              <ul>
                <ListItem>Collaborated with engineering team of 6 to prototype and develop 5 level air quality monitor using C++ and Arduino components</ListItem>
                <ListItem>Communicated progress and design updates in weekly presentations to peers and supervisors</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Front-end Development</h3>
              <DateFormat title="Portfolio Website">November 2021 - July 2022</DateFormat>
              <ul>
                <ListItem>Created 4 page responsive personal portfolio website with mobile friendly design using React, HTML, CSS</ListItem>
                <ListItem>Constructed wireframes and mockups of interfaces to scope and design user interfaces using Figma</ListItem>
                <ListItem>Developed 10 reusable components to streamline development process using React</ListItem>
                <ListItem>Enhanced performance for 90+ Google Lighthouse audit and 100 for accessibility, best practices, and SEO</ListItem>
              </ul>
            </div>            
          </section>

        </div>
      </div>

      <Button to="/resume#">Back to Top</Button>
    </section>
  );
}
