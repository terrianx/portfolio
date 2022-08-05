// ==========================================
// COMPONENT: Logo
// OVERVIEW:  Click pressing animation,
//            Signature hover color change
// USAGE:     Navbar
// ==========================================

import { HashLink as Link } from 'react-router-hash-link';

import '../button/Button.css'
import './Logo.css'

export default function Logo() {
    return (
      <div>
        <Link to="/#">
          <div className="button-container">
            <img src="./assets/sig.webp" 
                alt="Terrian Xiao signature" 
                height="20px"
                width="40px" 
                className="logo"/>
            <img src="./assets/sig.webp" 
                alt="Terrian Xiao signature outline" 
                height="20px" 
                width="40px"
                className="outline logo-outline"/>
          </div>
        </Link>
      </div>
    );
}
