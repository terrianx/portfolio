// ==========================================
// COMPONENT: Skills icon
// OVERVIEW:  generic template for skills icon
// USAGE:     Skills
// ==========================================

import './SkillsIcon.css';

export default function SkillsIcon(props) {
  return (
    <figure className="skills-icon">
      <img src={"./assets/icons/icon-" + props.file + ".webp"}
           alt={props.children + " icon"}
           width={props.width}/>
      <figcaption>{props.children}</figcaption>
    </figure>
  );
}
