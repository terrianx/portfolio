// ==========================================
// COMPONENT: Footer
// OVERVIEW:  Navigation and social links,
//            Contact info click to copy,
//            Copyright
// USAGE:     App
// ==========================================

import { HashLink as Link } from 'react-router-hash-link';
import ContactInfo from '../contact/ContactInfo';

import './Footer.css';

export default function Footer() {
  const activeClipboard = navigator.clipboard != null;

  return (
    <footer>
      <div className="footer-container">
        <Link to="/#" className="footer-name"><h1>Terrian Xiao</h1></Link>

        <div className="footer-item">
          <h2>Links</h2>
          <ul>
            <li><Link to="/#" className="link">Home</Link></li>
            <li><Link to="/#about" className="link">About</Link></li>
            <li><Link to="/resume#" className="link">Resume</Link></li>
            <li><Link to="/projects#" className="link">Projects</Link></li>
            <li><Link to="/gallery#" className="link">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-item">
          <h2>Social</h2>
          <ul>
            <li><a href="https://github.com/ytxpk" 
                   target="_blank"
                   rel="noreferrer"
                   className="link">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/terrianx/" 
                   target="_blank"
                   rel="noreferrer"
                   className="link">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-item">
          <h2>Contact</h2>
          <ul>
            <li className="footer-contact-li">
              {!activeClipboard ? <></>
              : <p className="footer-contact">&lt;Click to copy info&gt;</p>}
            </li>
          </ul>
          <ContactInfo />
        </div>

        <p className="copyright">© Terrian Xiao 2022. All rights reserved.</p>

      </div>
    </footer>
  );
}
