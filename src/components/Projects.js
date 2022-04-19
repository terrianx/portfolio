import Button from "./Button";

import './Projects.css';

// project page components
export default function Projects() {
    return (
      <section className="projects">
        <Project title="FreshTea Website"
                 src="./assets/FreshTea.png"
                 width="700px"
                 height="auto"
                 alt="FreshTea Website home page"
                 site="https://yu-xiao-boba-shop.netlify.app/"
                 code="https://github.com/ytxpk/boba-website"
                 tech=" HTML, CSS, JS"
                 class="fresh-tea">
          <p>I created this mock boba tea website to 
             gain working knowledge of front end web 
             development. Additionally, I am a fan of
             bubble tea and learned more about the history
             of the drink. I began by creating the site with
             HTML and CSS. Later, I learned and added JS to improve
             functionality and interactivity.
          </p>
          <ul>
            <lh>Features</lh>
            <pre>
              <li>-   Browser size responsiveness</li>
              <li>-   Customer review system</li>
              <li>-   Interactive menu with drinks, toppings, and options</li>
              <li>-   Cart system to store user order</li>
            </pre>
          </ul>
        </Project>
        <Project title="BlueAir Website"
                 src="./assets/BlueAir.png"
                 width="700px"
                 height="auto"
                 alt="Blue Website home page"
                 site="https://yu-xiao-blue-air.netlify.app/"
                 code="https://github.com/ytxpk/blue-air-website"
                 tech=" HTML, CSS, JS"
                 class="blue-air">
          <p>A mock website meant for a business that delivers 
             fresh air. Elegance and mobile usability was 
             a focus for this project. Through this project, 
             I enhanced my understanding of UI and UX 
             principles in addition to JS tools such as
             intersection observer.
          </p>
          <ul>
            <lh>Features</lh>
            <pre>
              <li>-   Animated links</li>
              <li>-   Fade in home page image</li>
              <li>-   Mobile responsiveness with hamburger menu</li>
            </pre>
          </ul>
        </Project>
        <Button to="/projects#">Back to Top</Button>
      </section>
    );
}
  
function Project(props) {
    return (
        <div className={[props.class, "project"].join(' ')}>
        <span className="diag-line"></span>
        <h1>{props.title}</h1>
        <div className="project-container">
            <div className="img-container">
            <span className="img-outline" 
                    width={props.width}
                    height={props.height}></span>
            <img src={props.src} 
                    alt={props.alt} 
                    width={props.width}
                    height={props.height}/>
            <p>{props.tech}</p>
            </div>
            <div className="project-buttons">
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
            </div>
            <div className="project-text">
            <div>{props.children}</div>
            </div>
        </div>
        </div>
    );
}
