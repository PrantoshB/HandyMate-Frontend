import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/hanymate-logo.png';
import isAuthenticated from './auth';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Services', path: '/' },
  ];

  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const isAdmin = localStorage.getItem('role') === 'admin';
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>

      <button type="button" className={`btn btn-link btn-sidebar-toggle ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        <span className="hamburger-icon" />
      </button>

      <aside className={`main-nav ${sidebarOpen ? '' : 'collapse'}`}>
        <div className="d-flex flex-column flex-shrink-0 bg-light sidebar">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src={logo} className="site-logo" alt="logo" />
          </a>
          <hr />
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
                  <NavLink className="nav-link" to="/delete-service">Delete Service</NavLink>
                </li>
              </>
            )}
            {isLoggedIn ? (
              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
