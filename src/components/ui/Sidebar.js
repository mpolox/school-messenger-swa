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
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
    <Navbar bg="light" expand={false} className="mb-1">
      <Container fluid>
        <Navbar.Brand href="#">Menu de Opciones</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Offcanvas
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Opciones
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-item nav-link" to="/"><FaHome/> Home</NavLink>
              <NavLink className="nav-item nav-link" to="/search"><FaSearch/> Search</NavLink>
              <NavLink className="nav-item nav-link" to="/student"><FaUser/> Student</NavLink>
              <NavLink className="nav-item nav-link" to="/teacher"><FaUserEdit/> Teacher</NavLink>
              <NavLink className="nav-item nav-link" to="/login" onClick={handleLogout}><FaPowerOff/> Logout</NavLink>              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

    </>
  );
};
