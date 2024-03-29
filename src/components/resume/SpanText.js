// ==========================================
// COMPONENT: Span text
// OVERVIEW:  Italicized header and normal weight text
// USAGE:     ResumePage
// ==========================================

import './SpanText.css';

export default function SpanText(props) {
  return (
    <span className="span-text">
      <p>{props.title}</p>
      <p className="colon">:</p>
      <p>{props.children}</p>
    </span>
  );
}
