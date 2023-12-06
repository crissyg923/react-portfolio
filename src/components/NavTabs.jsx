import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavTabs() {

  return (
  <header>

    <Navbar className="header"  expand="lg">
  <Navbar.Brand className="cg" href="#home">CG</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link href="/">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/aboutme">
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/portfolio">
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/resume">
      <Nav.Link href="/resume">Resume</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link href="/contact">Contact Me</Nav.Link>
      </LinkContainer>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </header>
  );
}

export default NavTabs;
