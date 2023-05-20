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
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
