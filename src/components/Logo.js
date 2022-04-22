import { HashLink as Link } from 'react-router-hash-link';

import './Button.css'
import './Logo.css'

export default function Logo() {
    return (
      <div>
        <Link to="/#">
          <div className="button-container">
            <img src="./assets/sig.png" 
                alt="Yu Xiao signature" 
                height="20px"
                width="40px" 
                className="logo"/>
            <img src="./assets/sig.png" 
                alt="Yu Xiao signature outline" 
                height="20px" 
                width="40px"
                className="outline logo-outline"/>
          </div>
        </Link>
      </div>
    );
}
