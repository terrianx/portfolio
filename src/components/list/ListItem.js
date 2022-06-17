import './ListItem.css';

export default function ListItem(props) {
  return (
    <li className="list-item">
      <p className="bullet">-</p>
      <p>{props.children}</p>
    </li>
  );
}
