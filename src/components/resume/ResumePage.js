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
  const docsLink = "https://docs.google.com/document/d/1SkgSWDNlJQG0U1pefVz51M-uuBjAgMqO0nWduWRfyBs/edit?usp=sharing";
  const degree = "Bachelor of Science in Engineering in Computer Science";
  const coursework = "Data Structures and Algorithms, Web Systems, Web Design, Operating Systems";

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
            <SpanText title="GPA">3.84/4.00</SpanText>
            <SpanText title="Coursework">{coursework}</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>SKILLS</h2>
            <SpanText title="Backend">C++, Python, Flask, Node.js, SQL</SpanText>
            <SpanText title="Frontend">React.js, Vue.js, HTML, CSS, Javascript</SpanText>
            <SpanText title="Tools">Git, Jira, Docker, AWS, Figma</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>WORK EXPERIENCE</h2>
            <div className="resume-content-block">
              <h3>Genentech, South San Francisco CA</h3>
              <DateFormat title="Fullstack Software Engineer Intern">May 2023 - August 2023</DateFormat>
              <ul>
                <ListItem>Implemented document management dashboard user interface enhancements using Vue.js and CSS</ListItem>
                <ListItem>Constructed REST API analytics to log, debug, and monitor client / server requests using Node.js</ListItem>
                <ListItem>Improved user workflows by reducing document search and author time by up to 63%</ListItem>
                <ListItem>Designed UI / UX mockups with Figma to align with customer feedback and requirements</ListItem>
                <ListItem>Utilized CI / CD practices to streamline software deployment with Git, Docker, and AWS</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Mathworks, Natick MA</h3>
              <DateFormat title="Compiler Software Engineer Intern">May 2022 - August 2022</DateFormat>
              <ul>
                <ListItem>Engineered dead code elimination compiler optimization to enhance performance of generated MATLAB code using C++</ListItem>
                <ListItem>Qualified compiler robustness by developing 85+ unit, integration, and system tests utilizing test driven development and automated testing frameworks</ListItem>
                <ListItem>Communicated technical decisions and impact through presentations to inform stakeholders</ListItem>
                <ListItem>Collaborated with agile development focused software engineering team using Jira</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Freelance, Remote</h3>
              <DateFormat title="Graphic Designer">July 2016 - August 2022</DateFormat>
              <ul>
                <ListItem>Negotiated with clients to create products based on updating specifications, maintaining flexibility and clear communication</ListItem>
                <ListItem>Led 5 person team for graphic design initiative for community conference with 50+ participants</ListItem>
              </ul>
            </div>
          </section>

          <section className="resume-content-section">
            <h2>PROJECTS</h2>

            <div className="resume-content-block">
              <h3>University of Michigan</h3>
              <DateFormat title="Network File Server">March 2023 - April 2023</DateFormat>
              <ul>
                <ListItem>Architected multi-threaded network file system for users to store, write, and read files using C++</ListItem>
                <ListItem>Leveraged mutexes, locks, and web sockets for concurrent request processing to improve performance</ListItem>
                <ListItem>Produced 20+ testing suites for 100% code coverage, ensuring server reliability using Python and C++</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <DateFormat title="Distributed Search Enginge">November 2022 - December 2022</DateFormat>
              <ul>
                <ListItem>Implemented scalable fullstack React.js, Flask, and SQL web based search engine using service oriented architecture, asynchronous programming, and parallel computing</ListItem>
                <ListItem>Developed distributed map reduce pipeline to efficiently index web document database using Python</ListItem>
                <ListItem>Built index and search servers to concurrently serve HTTPS requests through backend API</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Personal</h3>
              <DateFormat title="Portfolio Website">November 2021 - July 2022</DateFormat>
              <ul>
                <ListItem>Created 4 page responsive website with mobile friendly design using React.js, HTML, and CSS</ListItem>
                <ListItem>Constructed wireframes and mockups of interfaces to scope and design user interfaces utilizing Figma</ListItem>
              </ul>
            </div>            
          </section>

        </div>
      </div>

      <Button to="/resume#">Back to Top</Button>
    </section>
  );
}
