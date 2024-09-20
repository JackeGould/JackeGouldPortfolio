// import { Link, useLocation } from 'react-router-dom';
// import './Nav.css';

// function Nav() {
//   const currentPage = useLocation().pathname;

//   return (
//     <div>
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//       <Link
//           to="/home"
//           className={currentPage === '/home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//         </li>
//       <li className="nav-item">
//         <Link
//           to="/aboutme"
//           className={currentPage === '/aboutme' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/portfolio"
//           className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           My Work
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/contact"
//           className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//           <div className="nav-line"></div>
//           </div>
//   );
// }

// export default Nav;

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';

function Nav({ changeColor }) {
  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === '/home';
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <ul className="nav nav-tabs">
        {!isHomePage && (
          <li className="nav-item home-button">
            <Link
              to="/home"
              className={isHomePage ? 'nav-link active' : 'nav-link'}
              onClick={() => changeColor('#FFFFFF')}
            >
              Home
            </Link>
          </li>
        )}
        <li className={`nav-item ${isHomePage ? 'home-nav-item' : 'other-nav-item'}`}>
          <Link
            to="/aboutme"
            className={currentPage === '/aboutme' ? 'nav-link active' : 'nav-link'}
            onClick={() => changeColor('#EBFF00')}
          >
            About Me
          </Link>
        </li>

        {/* Dropdown for My Work */}
        <li className={`nav-item dropdown ${isHomePage ? 'home-dropdown' : 'other-dropdown'}`}>
          <span
            className={`nav-link ${currentPage === '/portfolio' ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            My Work
          </span>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link
                  to="/portfolio/web-design"
                  className="nav-link"
                  onClick={() => { changeColor('#EBFF00'); setDropdownOpen(false); }}
                >
                  Web Design
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/portfolio"
                  className="nav-link"
                  onClick={() => { changeColor('#EBFF00'); setDropdownOpen(false); }}
                >
                  Graphic Design
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className={`nav-item ${isHomePage ? 'home-nav-item' : 'other-nav-item'}`}>
          <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => changeColor('#EBFF00')}
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


