import { HashLink as Link } from 'react-router-hash-link';
import ContactInfo from './ContactInfo';

import './Footer.css';

export default function Footer() {
  const email = "txiaopk@gmail.com";
  const phone = "978-888-8886";
  const activeClipboard = navigator.clipboard != null;

  return (
    <footer>
      <div className="footer-container">
        <Link to="/#" className="footer-name"><h1>Yu Xiao</h1></Link>

        <div className="footer-item">
          <h1>Links</h1>
          <ul>
            <li><Link to="/#" className="link">Home</Link></li>
            <li><Link to="/#about" className="link">About</Link></li>
            <li><Link to="/resume#" className="link">Resume</Link></li>
            <li><Link to="/projects#" className="link">Projects</Link></li>
            {/* <li><Link to="/art#" className="link">Art</Link></li> */}
          </ul>
        </div>

        <div className="footer-item">
          <h1>Social</h1>
          <ul>
            <li><a href="https://github.com/ytxpk" 
                    target="_blank"
                    rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yuxiao8/" 
                    target="_blank"
                    rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-item">
          <h1>Contact</h1>
          <ul>
            <li className="footer-contact-li">
              {!activeClipboard ? <></>
              : <p className="footer-contact">&lt;Click to copy info&gt;</p>}</li>
          </ul>
          <ContactInfo />
        </div>

        <p className="copyright">© Yu Xiao 2022. All rights reserved.</p>

      </div>
    </footer>
  );
}
