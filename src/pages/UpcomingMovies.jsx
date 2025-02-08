import upcomingMovies from "../data/upcomingMovies";
import styles from "./UpcomingMovies.module.css";

function UpcomingMovies() {
    return (
        <div className={styles.container}>
            <h1>Kommende Filmer</h1>
            <div className={styles.movieList}>
                {upcomingMovies.map((movie, index) => (
                    <div key={index} className={styles.movieCard}>
                        <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                        <h2>{movie.title}</h2>
                        <p>Premiere: {movie.releaseDate}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingMovies;
