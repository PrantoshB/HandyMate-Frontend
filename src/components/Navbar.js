import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSignInAlt, FaSignOutAlt,
} from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import logo from '../assets/images/handymate-logo.png';
import isAuthenticated from './auth';

const Navbar = ({ sidebarOpen }) => {
  const links = [
    { id: 1, name: 'Services', path: '/' },
  ];

  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const isAdmin = localStorage.getItem('role') === 'admin';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <aside className={`main-nav ${sidebarOpen ? '' : 'collapse'}`}>
      <div className="d-flex flex-column flex-shrink-0 bg-light sidebar justify-content-between">
        <div className="logo-and-menu d-flex flex-column pt-5">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src={logo} className="site-logo mb-5" alt="logo" />
          </a>

          <ul className="nav flex-column">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <NavLink className="nav-link" to={link.path}>{link.name}</NavLink>
              </li>
            ))}
            {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserve">Reserve</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservations">My Reservations</NavLink>
              </li>

            </>
            )}
            {isLoggedIn && isAdmin && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-service">Add Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/delete-services">Delete Service</NavLink>
              </li>
            </>
            )}

          </ul>
        </div>
        {/* Social Sharing Links */}
        <div className="social-sharing p-3 d-flex flex-column mb-2 g-3">
          <ul className="d-flex justify-content-center g-4 logging p-0">
            {isLoggedIn ? (
              <li>
                <button type="button" className="logout btn btn-outline-danger btn-small" onClick={handleLogout}>
                  <FaSignOutAlt />
&nbsp;
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/signin" className="btn btn-small btn-dark">
                    <FaSignInAlt />
&nbsp;
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="btn btn-small btn-dark">
                    <AiOutlineUserAdd />
&nbsp;
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex justify-content-center g-4">
            <Link to="/" className="social-link">
              <FaFacebook />
            </Link>
            <Link to="/" className="social-link">
              <FaTwitter />
            </Link>
            <Link to="/" className="social-link">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/PrantoshB/HandyMate-Frontend" className="social-link">
              <FaGithub />
            </Link>
          </div>
          <p className="text-center">
            <small>
              &copy; 2023 by
              {' '}
              <strong>
                <span>
                  <a href="https://github.com/PrantoshB">P</a>
                </span>
&nbsp;
                <span>
                  <a href="https://github.com/haliljon">H</a>
                </span>
&nbsp;
                <span>
                  <a href="https://github.com/utsargo">U</a>
                </span>
&nbsp;
                <span>
                  <a href="https://github.com/JacintaNgwu">J</a>
                </span>
&nbsp;
                <span>
                  <a href="https://github.com/yetemegn-telaye">Y</a>
                </span>

              </strong>
              {' '}
              Group
            </small>
          </p>
        </div>
      </div>
    </aside>
  );
};

Navbar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
};

export default Navbar;
