import MovieCarousel from "../components/MovieCarousel";
import AccessibilityMenu from "../components/AccessibilityMenu";

function Home() {
    return (
        <div>
            <h1>Velkommen til Fjell Kino</h1>
            <AccessibilityMenu />
            <MovieCarousel />
        </div>
    );
}

export default Home;
