import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import './Button.css'

export default function Button(props) {
    return (
      <div className={[props.class, "button-container"].join(' ')}>
        <Link to={props.to} className="button">{props.children}</Link>
        <div className="outline">{props.children}</div>
      </div>
    );
}
