import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
  <header>
    {/* <div className="container-fluid navdisplay">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div>
       <a className="navbar-brand cg" href="/">CG</a>
       </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Aboutme' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Aboutme"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Aboutme' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
    </ul>
   
    </nav>
    </div> */}
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
      <LinkContainer to="/contactme">
      <Nav.Link href="/contact">Contact Me</Nav.Link>
      </LinkContainer>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </header>
  );
}

export default NavTabs;
