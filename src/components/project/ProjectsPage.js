// ==========================================
// COMPONENT: Projects page
// OVERVIEW:  All projects,
//            Back to top quick access
// USAGE:     App
// ==========================================

import Project from './Project';
import Button from '../button/Button';

import './ProjectsPage.css';

export default function Projects() {
  return (
    <section className="projects">

      <Project title="FreshTea Website"
                src="./assets/fresh-tea-0.webp"
                width="700px"
                height="auto"
                alt="FreshTea Website page"
                site="https://yu-xiao-boba-shop.netlify.app/"
                code="https://github.com/ytxpk/boba-website"
                tech="HTML, CSS, JS"
                class="fresh-tea"
                imgs="4">
        <p>I created this mock boba tea website to 
            gain working knowledge of front end web 
            development. Additionally, I am a fan of
            bubble tea and learned more about the history
            of the drink. I began by creating the site with
            HTML and CSS. Later, I learned and added JS to improve
            functionality and interactivity.
        </p>
        <ul>
          <p>Features</p>
            <li>- &nbsp; Browser size responsiveness</li>
            <li>- &nbsp; Customer review system</li>
            <li>- &nbsp; Interactive menu with drinks, toppings, and options</li>
            <li>- &nbsp; Cart system to store user order</li>
        </ul>
      </Project>

      <Project title="BlueAir Website"
                src="./assets/blue-air-0.webp"
                width="700px"
                height="auto"
                alt="Blue Website page"
                site="https://yu-xiao-blue-air.netlify.app/"
                code="https://github.com/ytxpk/blue-air-website"
                tech="HTML, CSS, JS"
                class="blue-air"
                imgs="2">
        <p>A mock website meant for a business that delivers 
            fresh air. Elegance and mobile usability was 
            a focus for this project. Through this project, 
            I enhanced my understanding of UI and UX 
            principles in addition to JS tools such as
            intersection observer.
        </p>
        <ul>
          <p>Features</p>
            <li>- &nbsp; Animated links</li>
            <li>- &nbsp; Fade in home page image</li>
            <li>- &nbsp; Mobile responsiveness with hamburger menu</li>
        </ul>
      </Project>

      <Button to="/projects#">Back to Top</Button>

    </section>
  );
}
