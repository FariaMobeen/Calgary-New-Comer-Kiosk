import React from 'react';
import COC_Logo from '../images/logo-cityofcalgary.png';
import '../style/Header.css'; // Optional: Add styling specific to the header


function Header() {
  return (
    <header className="App-header">
      <img src={COC_Logo} alt="City of Calgary logo" className="COCLogo" />
      <h1>Newcomer Services Kiosk</h1>
    </header>
  );
}

export default Header;
