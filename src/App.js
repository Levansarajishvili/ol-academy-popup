
import React, { useState } from 'react';
import Popup from '../src/Component/Popup';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <h1>ესეც მარტივი პოპაპი</h1>
      <button onClick={togglePopup}>გახსენი ფანჯარა</button>
      <Popup show={showPopup} handleClose={togglePopup}>
        <h2>ეს პოპაპია!</h2>
        <p>მიჰყევი გზას და არასოდეს დანებდე.</p>
      </Popup>
    </div>
  );
}

export default App;
