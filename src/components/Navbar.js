import { NavLink } from 'react-router-dom';
import logo from '../assets/images/hanymate-logo.png';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Services', path: '/' },
    { id: 2, name: 'Reserve', path: '/reserve' },
    { id: 3, name: 'My Reservations', path: '/reservations' },
    { id: 4, name: 'Add Service', path: '/add-service' },
    { id: 5, name: 'Delete Service', path: '/delete-services' },
  ];
  return (
    <aside className="main-nav col-md-2">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logo} className="site-logo" alt="logo" />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <NavLink className="nav-link" to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
