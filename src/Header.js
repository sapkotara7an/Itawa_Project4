import './style.scss';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';

function Header() {
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo(true);
    navigate('/contact');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={require('../src/img/logo.jpg')} width='100px' alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto nav-link-custom">
              <Nav.Link  as={NavLink} to='/' onClick={() => setInfo(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/about' onClick={() => setInfo(false)}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to='/project' onClick={() => setInfo(false)}>
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to='/specification' onClick={() => setInfo(false)}>
                Specification
              </Nav.Link>
              <Nav.Link as={NavLink} to='/gallery' onClick={() => setInfo(false)}>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to='/location' onClick={() => setInfo(false)}>
                Location
              </Nav.Link>
            </Nav>
            <Button onClick={handleInfo} className='img_btn' variant="danger">
              Book now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
