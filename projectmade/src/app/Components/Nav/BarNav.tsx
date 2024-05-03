import React from 'react';
import './BarNav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
            <span className="divider">|</span>
            <a href="/">Open Day</a>
            <span className="divider">|</span>
            <a href="/">
              Mappa
              <img src="/mappa.svg" alt="Mappa" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
