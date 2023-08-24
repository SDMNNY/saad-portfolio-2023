import React from 'react';
import Navigation from './Navigation'; 
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <h1>Your Name or Logo</h1>
      <Navigation /> {/* Include the Navigation component */}
    </header>
  );
}

export default Header;
