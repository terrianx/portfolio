// ==========================================
// COMPONENT: Anchor button info
// OVERVIEW:  Button as external link
// USAGE:     ResumePage
// ==========================================

import './Button.css'

export default function ButtonAnchor(props) {
  return (
    <div className={props.class + " button-container"}>
      <a href={props.to} 
          download={props.download}
          className="button"
          target="_blank"
          rel="noreferrer">
        {props.children}
      </a>

      <div className="outline">{props.children}</div>
      
    </div>
  );
}
