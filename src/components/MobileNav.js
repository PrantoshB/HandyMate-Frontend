import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import isAuthenticated from './auth';
import logo from '../assets/images/hanymate-logo.png';

const MobileNav = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const isAdmin = localStorage.getItem('role') === 'admin';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <>

      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 mobile-nav">
          <Container className="mobile-nav-container" fluid>

            <Navbar.Toggle className="mobile-nav-toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} className="site-logo" alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link className="nav-link" href="/">Services</Nav.Link>

                  {isLoggedIn && (
                  <>
                    <Nav.Link className="nav-link" href="/reserve">Reserve</Nav.Link>
                    <Nav.Link className="nav-link" href="/reservations">My Reservations</Nav.Link>
                  </>
                  )}
                  {isLoggedIn && isAdmin && (
                  <>
                    <Nav.Link className="nav-link" href="/add-service">Add Service</Nav.Link>
                    <Nav.Link className="nav-link" href="/delete-service">Delete Service</Nav.Link>
                  </>
                  )}
                  {isLoggedIn ? (
                    <Nav.Link className="nav-link" href="/signin" onClick={handleLogout}>Logout</Nav.Link>
                  ) : (
                    <>
                      <Nav.Link className="nav-link" href="/signin">Sign In</Nav.Link>
                      <Nav.Link className="nav-link" href="/signup">Sign Up</Nav.Link>
                    </>
                  )}
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MobileNav;
