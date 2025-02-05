import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./AccessibilityMenu.module.css";

function AccessibilityMenu() {
    const { darkMode, setDarkMode } = useTheme();
    const [fontSize, setFontSize] = useState(16);
    const [colorBlindMode, setColorBlindMode] = useState(false);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    useEffect(() => {
        if (colorBlindMode) {
            document.documentElement.classList.add("color-blind");
        } else {
            document.documentElement.classList.remove("color-blind");
        }
    }, [colorBlindMode]);

    return (
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
                <button onClick={() => setFontSize(fontSize - 2)}>-</button>
                <span>{fontSize}px</span>
                <button onClick={() => setFontSize(fontSize + 2)}>+</button>
            </div>

            <div className={styles.option}>
                <label>Fargeblind-modus:</label>
                <button onClick={() => setColorBlindMode(!colorBlindMode)}>
                    {colorBlindMode ? "Av" : "På"}
                </button>
            </div>
        </div>
    );
}

export default AccessibilityMenu;
