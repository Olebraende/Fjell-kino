import { Link } from "react-router-dom";
import AccessibilityMenu from "./AccessibilityMenu";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="/images/logo.webp" alt="Fjell Kino Logo" />
                    </Link>
                </div>

                    <ul className={styles.navLinks}>
                        <li><Link to="/">Hjem</Link></li>
                        <li><Link to="/movies">Filmer</Link></li>
                        <li><Link to="/upcoming">Kommende</Link></li>
                        <li><Link to="/about">Om Oss</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>

                <div className={styles.menuButtonContainer}>
                    <AccessibilityMenu />
                </div>
        </nav>
);
}

export default Navbar;
