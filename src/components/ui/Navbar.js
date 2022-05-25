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
    <Navbar sticky="top" collapseOnSelect  bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">School Messenger</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link eventKey="1" as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/student">
              Alumno
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/teacher">
              Maestro
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/search">
              Buscar
            </Nav.Link>
            <Nav.Link
              className="nav-item nav-link"
              to="/login"
              onClick={handleLogout}>
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}