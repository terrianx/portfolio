import Tooltip from 'react-tooltip';

import './ContactInfo.css';

export default function ContactInfo() {
  const email = "txiaopk@gmail.com";
  const phone = "978-888-8886";
  const activeClipboard = navigator.clipboard != null;
  
  function clickCopy(text) {
    if (activeClipboard) {
      navigator.clipboard.writeText(text);
    }
  }


  return (
    <div className="info">
      <p onClick={() => {clickCopy(email)}}
         data-tip="Copied" 
         data-event="click focus">{email}</p>

      {!activeClipboard ? <></>
      : <Tooltip bodyMode 
                 className="tooltip"
                 place="top"
                 type="dark" 
                 effect="solid"
                 globalEventOff="click"/>}
      
      <p onClick={() => {clickCopy(phone)}}
         data-tip="Copied" 
         data-event="click focus">{phone}</p>

      {!activeClipboard ? <></>
      : <Tooltip bodyMode
                 className="tooltip"
                 place="top"
                 type="dark" 
                 effect="solid"
                 globalEventOff="click"/>}
    </div>
  );
}
