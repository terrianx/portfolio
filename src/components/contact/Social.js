// ==========================================
// COMPONENT: Social media icons
// OVERVIEW:  Link to social media
// USAGE:     Navbar, 
//            HomePage/Header,
//            HomePage/Contact
// ==========================================

import './Social.css';

export default function Social() {
  return (
    <div className="social-container">
      <div className="social-button">
        <a className="fa fa-github"
          href="https://github.com/ytxpk" 
          target="_blank"
          rel="noreferrer"
          name="github link">
          <span>Github</span>
        </a>

        <p className="social-outline"></p>
      </div>

      <div className="social-button">
        <a className="fa fa-linkedin"
          href="https://www.linkedin.com/in/yuxiao8/" 
          target="_blank"
          rel="noreferrer"
          name="linkedin link">
          <span>LinkedIn</span>
        </a>

        <p className="social-outline"></p>
      </div>

    </div>
  );
}
