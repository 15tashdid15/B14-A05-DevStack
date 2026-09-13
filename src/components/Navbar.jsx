import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="nav-logo">
                <img src="/src/assets/logo-text.png" alt="Dev Stack" />
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home">Home</a>
                <a href="#technologies">Technologies</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="nav-actions">
                <button className="signin">
                    Sign In
                </button>

                <button className="signup">
                    Sign Up
                </button>
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

        </nav>
    );
}

export default Navbar;