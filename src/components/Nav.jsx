import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link
          to="/home"
          className={currentPage === '/home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
        </li>
      <li className="nav-item">
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
          My Work
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
    </ul>
          <div className="nav-line"></div>
          </div>
  );
}

export default Nav;