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
            This browser does not support PDFs. 
            Click 'Download' above to download and view.
          </object>
          <img src="./assets/YuXiaoResume.png" 
               alt="Yu Xiao Resume" 
               className="resume-png" 
               width="100%" />
        </div>
      </section>
    );
}
