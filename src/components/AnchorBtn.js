import './Button.css'

export default function AnchorBtn(props) {
    return (
      <div className={[props.class, "button-container"].join(' ')}>
        <a href={props.to} 
           download={props.download}
           className="button"
           target="_blank">{props.children}</a>
        <div className="outline">{props.children}</div>
      </div>
    );
}
