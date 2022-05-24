import { Spinner } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../Styles/App.css";

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', {       
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/student">Student</NavLink>
          <NavLink className="nav-item nav-link" to="/teacher">Teacher</NavLink>
          <NavLink className="nav-item nav-link" to="/search">Search</NavLink>
          <NavLink className="nav-item nav-link" to="/login" onClick={handleLogout}>Logout</NavLink>
        </div>
      </div>    
    </nav>
    )
}