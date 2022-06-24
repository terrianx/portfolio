// ==========================================
// COMPONENT: Date format
// OVERVIEW:  Custom resume position and date format
// USAGE:     ResumePage
// ==========================================

import './DateFormat.css';

export default function DateFormat(props) {
  return (
    <span className="date-format">
      <em className="date-format-title">{props.title}</em>
      <em className="date-format-date">{props.children}</em>
    </span>
  );
}
