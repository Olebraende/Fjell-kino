import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./AccessibilityMenu.module.css";

function AccessibilityMenu() {
    const { darkMode, setDarkMode } = useTheme();
    const [fontSize, setFontSize] = useState(16);
    const [colorBlindMode, setColorBlindMode] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleFontSize = (change) => {
        const newSize = Math.max(12, Math.min(24, fontSize + change));
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}px`;
    };

    const toggleColorBlindMode = () => {
        setColorBlindMode(!colorBlindMode);
        document.documentElement.classList.toggle("color-blind", colorBlindMode);
    };

    return (
        <div className={styles.accessibilityContainer}>
            <button onClick={toggleMenu} className={styles.menuButton}>
                👨‍🦯
            </button>

            {menuVisible && (
                <div className={styles.menu}>
                    <h2>Tilgjengelighet</h2>
                    <div className={styles.option}>
                        <label>Dark Mode:</label>
                        <button onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? "☀️ Lys" : "🌙 Mørk"}
                        </button>
                    </div>
                    <div className={styles.option}>
                        <label>Fontstørrelse:</label>
                        <button onClick={() => handleFontSize(-2)}>-</button>
                        <span>{fontSize}px</span>
                        <button onClick={() => handleFontSize(2)}>+</button>
                    </div>
                    <div className={styles.option}>
                        <label>Fargeblind-modus:</label>
                        <button onClick={toggleColorBlindMode}>
                            {colorBlindMode ? "Av" : "På"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccessibilityMenu;
