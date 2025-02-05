import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./MovieCarousel.module.css";
import movies from "../data/movies";

function MovieCarousel() {
    return (
        <div className={styles.carouselContainer}>
            <h2>Kinoaktuelle Filmer</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.movieCard}>
                            <img src={`/${movie.title}.jpg`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>Visningstider: {movie.times.join(", ")}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MovieCarousel;
