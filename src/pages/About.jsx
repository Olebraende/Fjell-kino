import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.container}>
            <h1>Om Fjell Kino</h1>
            <p>
                Fjell Kino er din lokale kino, plassert midt i hjertet av Fjell. Vi tilbyr de nyeste filmene 
                i moderne saler med topp lyd og bilde. Med et fokus på fellesskap og kvalitet, er vi stedet 
                for både store filmopplevelser og hyggelige stunder.
            </p>
            <h2>Vår Visjon</h2>
            <p>
                Vi ønsker å skape en magisk filmopplevelse for alle våre besøkende. Med komfortable seter, 
                et bredt utvalg av filmer og en innbydende atmosfære, er Fjell Kino stedet for ekte filmglede.
            </p>
            <h2>Kontaktinformasjon</h2>
            <ul>
                <li>📍 Adresse: Fjellavegen 5357, FJELL</li>
                <li>📧 E-post: <a href="mailto:kontakt@fjellkino.no">kontakt@fjellkino.no</a></li>
                <li>📞 Telefon: +47 123 45 678</li>
            </ul>
        </div>
    );
}

export default About;
