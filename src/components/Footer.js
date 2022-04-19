import { HashLink as Link } from 'react-router-hash-link';

import './Footer.css';

export default function Footer() {
    return (
      <footer>
        <div className="footer-container">
          <Link to="/#" className="footer-name"><h1>Yu Xiao</h1></Link>
          <div className="footer-item">
            <h1>Navigation</h1>
            <ul>
              <li><Link to="/#" className="link">Home</Link></li>
              <li><Link to="/#about" className="link">About</Link></li>
              <li><Link to="/resume#" className="link">Resume</Link></li>
              <li><Link to="/projects#" className="link">Projects</Link></li>
              <li><Link to="/art#" className="link">Art</Link></li>
            </ul>
          </div>
          <div className="footer-item">
            <h1>Social</h1>
            <ul>
              <li><a href="https://github.com/ytxpk" 
                     target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/yuxiao8/" 
                     target="_blank">LinkedIn</a></li>
              {/* <li><a href="https://www.instagram.com/tx_pk/" 
                     target="_blank">Instagram</a></li> */}
            </ul>
          </div>
          <div className="footer-item">
            <h1>Contact</h1>
            <ul>
              <li><p>txiaopk@gmail.com</p></li>
              <li><p>978-888-8886</p></li>
            </ul>
          </div>
          <p className="copyright">© Yu Xiao 2021. All rights reserved</p>
        </div>
      </footer>
    );
}
