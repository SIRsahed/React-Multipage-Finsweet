import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "./menu.css"
import Logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About us</Nav.Link>
            <Nav.Link href="">Features</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">FAQ</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
            <Nav.Link href="">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default Menu