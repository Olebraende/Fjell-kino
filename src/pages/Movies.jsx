import { Link } from "react-router-dom";
import styles from "./Movies.module.css";
import movies from "../data/movies";

function Movies() {
    return (
        <div className={styles.container}>
            <h1>Tilgjengelige Filmer</h1>
            <div className={styles.movieList}>
                {movies.map((movie, index) => (
                    <div key={index} className={styles.movieCard}>
                        <h2>{movie.title}</h2>
                        <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                        <p>Pris: {movie.price} NOK</p>
                        <p>Rating: {movie.rating}</p>
                        <p>Visningstider: {movie.times.join(", ")}</p>
                        <Link to="/booking">
                            <button>Bestill Billetter</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
