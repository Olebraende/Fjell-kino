import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>📍 Fjell Kino AS</p>
                <p>🏠 Adresse: Fjellavegen 5357, FJELL</p>
                <p>📧 Kontakt: <a href="mailto:kontakt@fjellkino.no">kontakt@fjellkino.no</a></p>
                <p>© {new Date().getFullYear()} Fjell Kino - Alle rettigheter reservert.</p>
            </div>
        </footer>
    );
}

export default Footer;
