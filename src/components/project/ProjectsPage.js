// ==========================================
// COMPONENT: Projects page
// OVERVIEW:  All projects,
//            Back to top quick access
// USAGE:     App
// ==========================================

import Project from './Project';
import Button from '../button/Button';
import ListItem from '../list/ListItem';

import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section className="projects-page">
      <span className="diag-line intro-diag"></span>

      <h1 className="title">Projects</h1>

      <Project title="Portfolio Website"
                src="./assets/portfolio-0.webp"
                width="700px"
                height="auto"
                alt="FreshTea Website page"
                site="https://terrianx.netlify.app/"
                code="https://github.com/terrianx/portfolio"
                tech="React, HTML, CSS"
                name="portfolio"
                imgs="4">
        <p>This is my personal website that acts as a digital 
           portfolio for all my projects, resume, and illustrations. 
           I built this responsive multipage website from scratch 
           using React.js, HTML, and CSS. Creating this was an amazing 
           learning experience to develop my front end skills. Read more
           about what I learned in the README on my Github.
        </p>
        <p className="features">Features</p>
        <ul>
          <ListItem>Mobile, tablet, and browser responsiveness</ListItem>
          <ListItem>Splash section with image randomizer</ListItem>
          <ListItem>Click to copy contact info</ListItem>
          <ListItem>Custom resume viewer for enhanced mobile and tablet accessibility</ListItem>
          <ListItem>Image carousel for projects and gallery</ListItem>
        </ul>
      </Project>

      <Project title="FreshTea Website"
                src="./assets/freshtea-0.webp"
                width="700px"
                height="auto"
                alt="FreshTea Website page"
                site="https://freshtea.netlify.app/"
                code="https://github.com/terrianx/freshtea"
                tech="HTML, CSS, JS"
                name="freshtea"
                imgs="4">
        <p>I created this mock boba tea website to 
            gain working knowledge of front end web 
            development. Additionally, I am a fan of
            bubble tea and learned more about the history
            of the drink. I began by creating the site with
            HTML and CSS. Later, I learned and added JS to improve
            functionality and interactivity.
        </p>
        <p className="features">Features</p>
        <ul>
          <ListItem>Browser size responsiveness</ListItem>
          <ListItem>Customer review system</ListItem>
          <ListItem>Interactive menu with drinks, toppings, and options</ListItem>
          <ListItem>Cart system to store user order</ListItem>
        </ul>
      </Project>

      <Project title="BlueAir Website"
                src="./assets/blueair-0.webp"
                width="700px"
                height="auto"
                alt="Blue Website page"
                site="https://blueair.netlify.app/"
                code="https://github.com/terrianx/blueair"
                tech="HTML, CSS, JS"
                name="blueair"
                imgs="2">
        <p>A mock website meant for a business that delivers 
            fresh air. Elegance and mobile usability was 
            a focus for this project. Through this project, 
            I enhanced my understanding of UI and UX 
            principles in addition to JS tools such as
            intersection observer.
        </p>
        <p className="features">Features</p>
        <ul>
          <ListItem>Animated links</ListItem>
          <ListItem>Fade in home page image</ListItem>
          <ListItem>Mobile responsiveness with hamburger menu</ListItem>
        </ul>
      </Project>

      <Button to="/projects#">Back to Top</Button>

    </section>
  );
}
