import React, { useState } from "react";
import "../../Styles/App.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaUserEdit,
  FaUser,
  FaSearch,
  FaHome,
  FaPowerOff,
  FaBars,
} from "react-icons/fa";
import { Container, Navbar, Offcanvas, Nav, Button } from "react-bootstrap";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    console.log("Id:".id);
    navigate("/" + id);
  };

  return (
    <div className="side-container">
      <div>
        <NavLink className="link-closed" to="/">
          <FaHome />
          {open ? <p>Home</p> : null}
        </NavLink>
      </div>
      <div>
        <NavLink className="link-closed" to="/search">
          <FaSearch />
        </NavLink>
      </div>
      <div>
        <NavLink className="link-closed" to="/student">
          <FaUser />
        </NavLink>
      </div>
      <div>
        <NavLink className="link-closed" to="/teacher">
          <FaUserEdit />
        </NavLink>
      </div>
      <div>
        <NavLink className="link-closed" to="/">
          <FaPowerOff />
        </NavLink>
      </div>
    </div>
  );
};
