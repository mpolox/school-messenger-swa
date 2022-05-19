import React from "react";
import "../../Styles/App.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUserEdit,
  FaUser,
  FaSearch,
  FaHome,
  FaPowerOff,
} from "react-icons/fa";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  Button} from "react-bootstrap";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    navigate("/" + id);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false} className="sb-1" collapseOnSelect={false}>
        <Container fluid>
          <Navbar.Brand href="#">Menu de Opciones</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end" bg="dark" variant="dark">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Opciones</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <Button id="home" onClick={handleClick}>
                  <FaHome /> Home</Button>
                <br />
                <Button id="search" onClick={handleClick}>
                  <FaSearch/> Search
                </Button>
                <br />
                <Button id="teacher" onClick={handleClick}>
                <FaUserEdit/> Teacher
                </Button>
                <br />
                <Button id="student" onClick={handleClick}>
                <FaUser/> Student
                </Button>
                <br />
                <Button id="login" variant="danger" onClick={handleClick}>
                <FaPowerOff/> Logout
                </Button>
                <br />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
