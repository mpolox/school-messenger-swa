import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/App.css";

export const NavbarMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">School Messenger</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link eventKey="1" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/student">
              Student
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/teacher">
              Teacher
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link
              className="nav-item nav-link"
              to="/login"
              onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}