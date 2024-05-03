  import React from 'react';
  import './BarNav.css';

  export default function Nav() {
    return (
      <header>
        <a className="alal" href="/">Home</a>
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
    );
  }
