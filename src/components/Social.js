import './Social.css';

export default function Social() {
    return (
      <div className="social-container">
        <div className="social-button">
          <a className="fa fa-github"
            href="https://github.com/ytxpk" 
            target="_blank"></a>
          <p className="social-outline"></p>
        </div>
        <div className="social-button">
          <a className="fa fa-linkedin"
            href="https://www.linkedin.com/in/yuxiao8/" 
            target="_blank"></a>
          <p className="social-outline"></p>
        </div>
        {/* <div className="social-button">
          <a className="fa fa-instagram"
            href="https://www.instagram.com/tx_pk/" 
            target="_blank"></a>
          <p className="social-outline"></p>
        </div> */}
      </div>
    );
}
