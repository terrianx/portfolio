// ==========================================
// COMPONENT: Project
// OVERVIEW:  Screenshot image carousel,
//            External project and code links,
//            Description and features
// USAGE:     ProjectPage
// ==========================================

import Carousel from '../carousel/Carousel';

import './Project.css';

export default function Project(props) {
  return (
    <div className={props.class + " project"}>
      <span className="diag-line"></span>
      <div className="project-container">

        <h1>{props.title}</h1>

        <div className="img-container">
          <span className="img-outline" 
                width={props.width}
                height={props.height}>
          </span>

          <Carousel component="project"
                    name={props.name}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                    imgs={props.imgs}>
          </Carousel>

          <p>{props.tech}</p>
        </div>

        <div className="project-buttons">
          <div className="button-container">
            <a href={props.site} 
            className="button" 
            target="_blank"
            rel="noreferrer">Site</a>
            <p className="outline">Site</p>
          </div>
          <div className="button-container">
            <a href={props.code} 
            className="button" 
            target="_blank"
            rel="noreferrer">Code</a>
            <p className="outline">Code</p>
          </div>
        </div>

        <div className="project-text-container">
          <div>
            {props.children}
          </div>
        </div>

      </div>
    </div>
  );
}
