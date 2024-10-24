import React, { useState } from 'react';
import './CSS Files/Test1.css';

export default function Test1() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <h3 className='logo'>Portfolio</h3>
      <ul 
        id='nav-ul' 
        className={isMobile ? 'nav-link-mobile active' : 'nav-link-desktop'}
      >
        <li className='nav-li'>Home</li>
        <li className='nav-li'>About</li>
        <li className='nav-li'>Skills</li>
        <li className='nav-li'>Projects</li>
        <li className='nav-li'>Contact us</li>
      </ul>
      <button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <h1>X</h1> : <h1>=</h1>}
      </button>
    </nav>
  );
}
