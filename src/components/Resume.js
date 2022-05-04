import AnchorBtn from './ButtonAnchor';

import './Resume.css';

export default function Resume() {
  let docsLink = "https://docs.google.com/document/d/1CpQL-_v7v3_YCdxQXRoP112ybwPCpTEqIaEqMFjr8qk/edit?usp=sharing";
  return (
    <section className="resume">
      <span className="diag-line"></span>
      <h1>Resume</h1>
      <AnchorBtn to={docsLink}>View</AnchorBtn>
      <AnchorBtn to="./assets/YuXiaoResume.pdf"
                 download="YuXiaoResume">Download</AnchorBtn>
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
          <a href={docsLink} target="_blank" rel="noreferrer">
            <u>Click here to view</u>
          </a>
        </object>
        <img src="./assets/YuXiaoResume.png" 
              alt="Yu Xiao Resume" 
              className="resume-png" 
              width="100%" />
      </div>
    </section>
  );
}
