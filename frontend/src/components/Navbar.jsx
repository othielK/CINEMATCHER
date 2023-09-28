/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import cinematcherLogo from "../assets/img/cinematcher-logo2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuOpen]);

  return (
    <nav>
      <div className="mobile_menu">
        <div className="desktop_h2-nav">
          <img src={cinematcherLogo} alt="cinematcher-logo2" />
        </div>
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>

          <div className="menu-items">
            <ul className="menu-list">
              <a href="#" onClick={closeMenu}>
                Accueil
              </a>
              <a href="#" onClick={closeMenu}>
                Genres
              </a>
              <a href="#" onClick={closeMenu}>
                Humeur
              </a>
              <a href="#" onClick={closeMenu}>
                Nouveautés & Popularités
              </a>
              <Link to="/favorites" onClick={closeMenu}>
                Mes favoris
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
