import PropTypes from 'prop-types';
import React from 'react';
import './Navbar.scss';
import SignedNav from './SignedNav';
import UnSignedNav from './UnSignedNav';

const Navbar = (props) => {
  const { signed } = props;
  return (
    <div className="Navbar">
      <div className="left-menu">
        <img src="https://picsum.photos/300/80" alt="logo-brand" />
      </div>
      <div className="right-menu">
        <nav className="nav-item">
          <button type="button">Home</button>
          {signed ? <SignedNav /> : <UnSignedNav />}
        </nav>
        <div className="search-bar">
          <input placeholder="Search Here" type="search" name="search" id="search" />
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  signed: PropTypes.bool.isRequired,
};

export default Navbar;
