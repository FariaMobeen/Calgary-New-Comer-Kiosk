import React from 'react';
import COC_Logo from '../images/logo-cityofcalgary.png';
import '../style/Header.css'; // Optional: Add styling specific to the header


function Header() {
  return (
    <header className="App-header">
      <img src={COC_Logo} alt="City of Calgary logo" className="COCLogo" />
      Newcomer Services Kiosk
    </header>
  );
}

export default Header;
