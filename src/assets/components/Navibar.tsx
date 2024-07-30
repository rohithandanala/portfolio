import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../App.css";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="white" fixed="top">
        <Container className="navibar">
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="navibarlink">
                Home
              </NavLink>
              <NavLink to="/About" className="navibarlink">
                About
              </NavLink>
              <NavLink to="/ContactMe" className="navibarlink">
                Contact Me
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
