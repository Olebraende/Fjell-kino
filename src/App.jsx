import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import UpcomingMovies from "./pages/UpcomingMovies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import AccessibilityMenu from "./components/AccessibilityMenu";
import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <AccessibilityMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/upcoming" element={<UpcomingMovies />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
