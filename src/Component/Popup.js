
import React from 'react';
import '../Component/Popup.css';

const Popup = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";
  
    const handleOutsideClick = (e) => {
      if (e.target.className === "popup display-block") {
        handleClose();
      }
    };
  
    return (
      <div className={showHideClassName} onClick={handleOutsideClick}>
        <section className="popup-main">
          <button className="close-button" onClick={handleClose}>X</button>
          {children}
        </section>
      </div>
    );
  };
  
  export default Popup;
