import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = ({ loggedIn, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>AgroSmart</div>

      {/* Navigation Links */}
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>
        <Link to="/sensors" onClick={() => setMenuOpen(false)}>
          Sensors
        </Link>
        <Link to="/crops" onClick={() => setMenuOpen(false)}>
          Crops
        </Link>
        <Link to="/water" onClick={() => setMenuOpen(false)}>
          Water
        </Link>
        <Link to="/irrigation" onClick={() => setMenuOpen(false)}>
          Irrigation
        </Link>
        <Link to="/alerts" onClick={() => setMenuOpen(false)}>
          Alerts
        </Link>
        <Link to="/settings" onClick={() => setMenuOpen(false)}>
          Settings
        </Link>

        {loggedIn && (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

      {/* Right Controls (Theme + Hamburger) */}
      <div className={styles.rightControls}>
        <ThemeToggle />
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
