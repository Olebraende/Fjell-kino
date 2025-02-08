import MovieCarousel from "../components/MovieCarousel";
import AccessibilityMenu from "../components/AccessibilityMenu";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <h1>Velkommen til Fjell Kino</h1>
            <AccessibilityMenu />
            <MovieCarousel />
        </div>
    );
}

export default Home;
