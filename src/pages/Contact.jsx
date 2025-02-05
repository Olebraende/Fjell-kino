import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000); // Meldingen forsvinner etter 3 sekunder
        setEmail("");
        setMessage("");
    };

    return (
        <div className={styles.container}>
            <h1>Kontakt Oss</h1>
            <p>Har du spørsmål? Send oss en melding, så svarer vi så fort vi kan!</p>

            {sent && <p className={styles.success}>Meldingen er sendt! ✅</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="email">E-post:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message">Melding:</label>
                <textarea
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button type="submit">Send melding</button>
            </form>
        </div>
    );
}

export default Contact;
