import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsAccountMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={user ? "/home" : "/"} className="navbar-brand">
          KL SportsHub
        </Link>
        <div className="navbar-links">
          {user && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/departments">Departments</Link>
              <Link to="/live-matches">Live Matches</Link>
              <Link to="/tournaments">Tournaments</Link>
              <Link to="/athletes">Athletes</Link>
            </>
          )}
          
          {!user ? (
            <>
              <Link to="/login" className="nav-button">Login</Link>
              <Link to="/register/student" className="nav-button primary">Register</Link>
            </>
          ) : (
            <div className="account-dropdown">
              <button 
                className="account-button"
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              >
                <i className="fas fa-user"></i>
                My Account
                <i className={`fas fa-chevron-${isAccountMenuOpen ? 'up' : 'down'}`}></i>
              </button>
              {isAccountMenuOpen && (
                <div className="account-menu">
                  <Link to="/profile" onClick={() => setIsAccountMenuOpen(false)}>
                    <i className="fas fa-user-circle"></i>
                    Profile
                  </Link>
                  <Link to="/account/registrations" onClick={() => setIsAccountMenuOpen(false)}>
                    <i className="fas fa-clipboard-list"></i>
                    My Registrations
                  </Link>
                  <Link to="/account/settings" onClick={() => setIsAccountMenuOpen(false)}>
                    <i className="fas fa-cog"></i>
                    Settings
                  </Link>
                  <button onClick={handleLogout} className="logout-button">
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 