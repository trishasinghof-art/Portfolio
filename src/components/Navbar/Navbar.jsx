import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          My Portfolio
        </div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" className="navbar-link" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="navbar-link">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/web-adventures" className="navbar-link">
              Web Adventures
            </NavLink>
          </li>
          <li>
            <NavLink to="/design-gallery" className="navbar-link">
              Design Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
