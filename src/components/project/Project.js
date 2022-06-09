// ==========================================
// COMPONENT: Project
// OVERVIEW:  Screenshot image carousel,
//            External project and code links,
//            Description and features
// USAGE:     ProjectPage
// ==========================================

import Carousel from '../carousel/Carousel';
import ButtonAnchor from '../button/ButtonAnchor';

import './Project.css';

export default function Project(props) {
  return (
    <div className={props.class + " project"}>
      <h1>{props.title}</h1>

      <div className="img-container">
        <span className="img-outline" >
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
        <ButtonAnchor to={props.site}>Site</ButtonAnchor>
        <ButtonAnchor to={props.code}>Code</ButtonAnchor>
      </div>
      
      <div className="project-text-container">
        {props.children}
      </div>

    </div>
  );
}
