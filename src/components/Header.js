import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import icon from '../assets/icon.png';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="header">
      <h1>Realworld Blog</h1>
      <nav>
        {user ? (
          <div className="user-info">
            <span>{user.username}</span>
            <img src={icon} alt="avatar" className="avatar" />
            <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/sign-in" className="btn sign-in">Sign In</Link>
            <Link to="/sign-up" className="btn sign-up">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
