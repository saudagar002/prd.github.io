import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style/navbar.css"
import { NavLink } from 'react-router-dom';

function Appbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary main-navbar">
      <Container>
        <Navbar.Brand href="#home" className='nav-logo'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"}  className={"nav-links"}>Home</NavLink>
            <NavLink to={"/products"}  className={"nav-links"}>Products</NavLink>
            <NavLink to={"/catagory"}  className={"nav-links"}>Catogary</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;