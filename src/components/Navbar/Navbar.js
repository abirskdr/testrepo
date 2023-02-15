import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

import { Search } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';

function NavBar() {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="#">Order</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <aside className={visible ? 'open' : 'close'}>
                <input placeholder="Search..." type="text" />
              </aside>
              <Search onClick={handleVisibility} />
            </Nav.Link>
            <Nav.Link href="#">
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
