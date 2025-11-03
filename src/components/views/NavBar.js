import { Navbar, Nav , Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
    <Navbar bg="light" variant="light" className="rounded mb-4 mt-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}
export default NavBar