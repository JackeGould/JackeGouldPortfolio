import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons for icons
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <div className="container">
        <p>Connect with me:</p>
        <a href="https://github.com/JackeGould" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jacklyngould" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;