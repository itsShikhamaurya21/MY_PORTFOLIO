import {useState} from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import "../../src/index.css"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-name">
          <h2>Shikha Maurya</h2>
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
         

          <a href="#education" onClick={closeMenu}>Education</a>
           <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          {/* <a href="#experience" onClick={closeMenu}>Experience</a> */}
          {/* <a href="#dsa" onClick={closeMenu}>DSA Journey</a> */}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;