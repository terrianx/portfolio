// ==========================================
// COMPONENT: Social media icons
// OVERVIEW:  Link to social media
// USAGE:     Navbar, 
//            HomePage/Splash,
//            HomePage/Contact
// ==========================================

import './Social.css';

export default function Social() {
  return (
    <div className="social-container">
      <div className="social-button">
        <a className="fa fa-github"
          href="https://github.com/terrianx" 
          target="_blank"
          rel="noreferrer"
          aria-label="Github link">
        </a>

        <p className="social-outline"></p>
      </div>

      <div className="social-button">
        <a className="fa fa-linkedin"
          href="https://www.linkedin.com/in/terrianx/" 
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Link">
        </a>

        <p className="social-outline"></p>
      </div>

    </div>
  );
}
