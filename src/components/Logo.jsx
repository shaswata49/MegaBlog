import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;