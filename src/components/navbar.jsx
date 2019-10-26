import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button className="navbar-brand btn btn-link ">
        Navbar
        <span className="badge badge-pill bade-secondary">{totalCounters}</span>
      </button>
    </nav>
  );
};

export default NavBar;
