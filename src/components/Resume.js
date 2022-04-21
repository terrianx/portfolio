import './Resume.css';

export default function Resume() {
    return (
      <section className="resume">
        <span className="diag-line"></span>
        <h1>Resume</h1>
        <div className="button-container">
          <a href="./assets/YuXiaoResume.pdf" 
            download="YuXiaoResume"
            className="button">Download</a>
          <p className="outline">Download</p>
        </div>
        <div className="resume-content-container">
          <object data="./assets/YuXiaoResume.pdf#toolbar=0"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="resume-pdf">
            <p>This browser or device does not support PDFs. <br></br>
              Click 'Download' above to download and view
              or view at link below.</p>
            <br></br>
            <a href="https://docs.google.com/document/d/1CpQL-_v7v3_YCdxQXRoP112ybwPCpTEqIaEqMFjr8qk/edit?usp=sharing"
               target="_blank"><u>Click here to view</u></a>
          </object>
          <img src="./assets/YuXiaoResume.png" 
               alt="Yu Xiao Resume" 
               className="resume-png" 
               width="100%" />
        </div>
      </section>
    );
}
