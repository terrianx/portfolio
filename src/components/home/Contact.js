// ==========================================
// COMPONENT: Contact section
// OVERVIEW:  External link to social media,
//            Contact info click to copy,
//            Back to top quick access
// USAGE:     HomePage
// ==========================================

import ContactInfo from '../contact/ContactInfo';
import Social from '../contact/Social';
import Button from '../button/Button';

import './Contact.css';

export default function Contact() {
  const activeClipboard = navigator.clipboard != null;

  return (
    <section className="contact">

      <span className="anchor" id="contact"></span>
      
      <div className="contact-container">
        <span className="diag-line"></span>
        <h1>Contact</h1>

        {!activeClipboard ? <></>
        : <p className="contact-copy">&lt;Click to copy info&gt;</p>}
        
        <ContactInfo />

        <Social />

        <Button to="/#">Back to Top</Button>
      </div>

    </section>
  );
}
