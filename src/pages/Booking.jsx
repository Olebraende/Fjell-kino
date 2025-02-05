import { useState } from "react";
import styles from "./Booking.module.css";
import movies from "../data/movies";

function Booking() {
    const [selectedMovie, setSelectedMovie] = useState(movies[0].title);
    const [tickets, setTickets] = useState(1);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Meldingen forsvinner etter 3 sekunder
    };

    return (
        <div className={styles.container}>
            <h1>Bestill Billetter</h1>
            <p>Velg en film og antall billetter du ønsker å kjøpe.</p>

            {success && <p className={styles.success}>Billetter reservert! ✅</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="movie">Velg film:</label>
                <select
                    id="movie"
                    value={selectedMovie}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                >
                    {movies.map((movie, index) => (
                        <option key={index} value={movie.title}>
                            {movie.title} ({movie.price} NOK)
                        </option>
                    ))}
                </select>

                <label htmlFor="tickets">Antall billetter:</label>
                <input
                    type="number"
                    id="tickets"
                    min="1"
                    max="10"
                    value={tickets}
                    onChange={(e) => setTickets(e.target.value)}
                    required
                />

                <button type="submit">Bekreft bestilling</button>
            </form>
        </div>
    );
}

export default Booking;
