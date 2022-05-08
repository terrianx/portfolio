// ==========================================
// COMPONENT: Contact info
// OVERVIEW:  Click to copy feature,
//            Auto select email and phone
// USAGE:     HomePage/Contact, 
//            Footer
// ==========================================

import { useRef } from 'react';

import './ContactInfo.css';

export default function ContactInfo() {
  const email = "txiaopk@gmail.com";
  const phone = "978-888-8886";

  const lightEmail = useRef();
  const lightPhone = useRef();

  const activeClipboard = navigator.clipboard != null;

  // copies text to clipboard if able
  // default select text
  function copyText(text) {
    if (activeClipboard) {
      navigator.clipboard.writeText(text);
    }
    let node = lightEmail;
    if (text === phone) node = lightPhone;

    const select = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(node.current);
    select.removeAllRanges();
    select.addRange(range);
  }

  return (
    <div className="info">
      <p ref={lightEmail} 
         onClick={() => {copyText(email)}}>{email}</p>

      <p ref={lightPhone}
         onClick={() => {copyText(phone)}}>{phone}</p>
    </div>
  );
}
