import { FiMenu, FiGithub } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/src/assets/logo-text.png" alt="Dev Stack" />
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-actions">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>

      <button className="menu-btn">
        <FiMenu />
      </button>
    </nav>
  );
}

export default Navbar;