import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link
          to="/home"
          className={currentPage === '/home' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
        <Link
          to="/aboutme"
          className={currentPage === '/aboutme' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  );
}

export default Nav;