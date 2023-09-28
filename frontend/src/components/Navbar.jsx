/* eslint-disable react/jsx-no-undef */
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
              <Link to="/" onClick={closeMenu}>
                Accueil
              </Link>
              <Link to="/genders" onClick={closeMenu}>
                Genres
              </Link>
              <Link to="/moods" onClick={closeMenu}>
                Humeur
              </Link>
              <Link to="/newandpopular" onClick={closeMenu}>
                Nouveautés & Popularités
              </Link>
              <Link to="/favoris" onClick={closeMenu}>
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
