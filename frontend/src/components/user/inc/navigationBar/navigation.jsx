
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Door Plus
      </Link>
      {/* <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <i className="fa fa-search search-icon"></i>
      </div> */}
      <Link to="/login" className="login-button">
        Login
      </Link>
    </nav>
  );
}

export default Navigation;
