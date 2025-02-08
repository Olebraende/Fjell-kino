import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src="/images/logo.webp" alt="Fjell Kino Logo" className={styles.logo} />
            </Link>
            <ul className={styles.navLinks}>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/movies">Filmer</Link></li>
                <li><Link to="/upcoming">Kommende</Link></li>
                <li><Link to="/about">Om Oss</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
            <button className={styles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
}

export default Navbar;
