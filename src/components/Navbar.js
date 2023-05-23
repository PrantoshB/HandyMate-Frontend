import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Services', path: '/' },
    { id: 2, name: 'Reserve', path: '/reserve' },
    { id: 3, name: 'My Reservations', path: '/reservations' },
    { id: 4, name: 'Add Service', path: '/add-service' },
    { id: 5, name: 'Delete Service', path: '/' },
  ];
  return (
    <header>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logo} height={100} width={100} alt="logo" />
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
    </header>
  );
};

export default Navbar;
