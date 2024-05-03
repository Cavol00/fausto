import React from 'react';
import './BarNav.css';

export default function Nav() {
  return (
    <body className='ciao'>
      

      
            <header >
        <a className="alal" href="/">
          <img src="/home.svg" alt="casa dolce casa" />
          Home
        </a>
        <span className="divider">|</span>
        <a className='alal' href="/">
          Open Day
          <img src="/openDay.svg" alt="openDay" />
        </a>
        <span className="divider">|</span>
        <a className="alal" href="/">
          <img src="/mappa.svg" alt="Mappa" />
          Mappa
        </a>
      </header>
      </body>
    
  );
}
