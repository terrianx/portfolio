// ==========================================
// COMPONENT: Project
// OVERVIEW:  Screenshot image carousel,
//            External project and code links,
//            Description and features
// USAGE:     ProjectPage
// ==========================================

import { useState } from 'react';

import './Project.css';

export default function Project(props) {
  const [imgNum, setImgNum] = useState(0);

  const imgs = props.imgs;

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

          <img src={"./assets/" + props.class 
                    + "-" + (imgNum % imgs) 
                    + ".webp"} 
               alt={props.alt} 
               width={props.width}
               height={props.height}/>

          <div className="next-btn btn-r"
               onClick={() => {setImgNum(
                (imgNum + 1) % imgs)}}>
              &rsaquo;
          </div>

          <div className="next-btn btn-l"
               onClick={() => {setImgNum(
                (imgNum + 2 * imgs - imgs - 1) % imgs)}}>
              &lsaquo;
          </div>

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
