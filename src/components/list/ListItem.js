// ==========================================
// COMPONENT: List item
// OVERVIEW:  Custom bulleted list item
// USAGE:     ProjectPage,
//            ResumePage
// ==========================================

import './ListItem.css';

export default function ListItem(props) {
  return (
    <li className="list-item">
      <p className="bullet">-</p>
      <p>{props.children}</p>
    </li>
  );
}
