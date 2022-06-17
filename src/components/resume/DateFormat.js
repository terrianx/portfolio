import './DateFormat.css';

export default function DateFormat(props) {
  return (
    <span className="date-format">
      <h4 className="date-format-title">{props.title}</h4>
      <h4 className="date-format-date">{props.children}</h4>
    </span>
  );
}
