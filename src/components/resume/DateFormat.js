// ==========================================
// COMPONENT: Date format
// OVERVIEW:  Custom resume position and date format
// USAGE:     ResumePage
// ==========================================

import './DateFormat.css';

export default function DateFormat(props) {
  return (
    <span className="date-format">
      <p className="date-format-title">{props.title}</p>
      <p className="date-format-date">{props.children}</p>
    </span>
  );
}
