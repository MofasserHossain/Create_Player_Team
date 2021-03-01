import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <nav>
        <div className="container">
          <ul>
            <li className="logo">Team Creator</li>
            <div className="items">
              <li>Players</li>
              <li>Team</li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
