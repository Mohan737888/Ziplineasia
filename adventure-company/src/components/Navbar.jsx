
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
 import logo from "../assets/logo.png";
function Navbar() {
  return (
    <header className="navbar">
     <div className="logo">
  <img src={logo} alt="Logo" />
</div>

      <nav>
       
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button className="quote-btn">
        <FaPhoneAlt /> Get Quote
      </button>
    </header>
  );
}

export default Navbar;