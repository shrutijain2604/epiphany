import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmailForFutureMe from "./pages/EmailForFutureMe";
import DigitalLetters from "./pages/DigitalLetters";
import UnsentLetters from "./pages/UnsentLetters";
import logo from "./assets/logo2-bg.png"; // Import your logo

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Navigation Bar */}
        <NavBar logo={logo} />

        {/* Main Content */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage logo={logo} />} />
            <Route path="/email-for-future-me" element={<EmailForFutureMe />} />
            <Route path="/digital-letters" element={<DigitalLetters />} />
            <Route path="/unsent-letters" element={<UnsentLetters />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// NavBar Component
const NavBar = ({ logo }) => {
  const location = useLocation(); // Get the current route location

  return (
    <nav style={styles.nav}>
      <div style={styles.navBrand}>
        <Link to="/" style={styles.navBrandLink}>
          <img src={logo} alt="Epiphany Logo" style={styles.logo} />
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/"
            style={{
              ...styles.navLink,
              ...(location.pathname === "/" && styles.activeNavLink),
            }}
          >
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/email-for-future-me"
            style={{
              ...styles.navLink,
              ...(location.pathname === "/email-for-future-me" && styles.activeNavLink),
            }}
          >
            Email for Future Me
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/digital-letters"
            style={{
              ...styles.navLink,
              ...(location.pathname === "/digital-letters" && styles.activeNavLink),
            }}
          >
            Digital Letters
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/unsent-letters"
            style={{
              ...styles.navLink,
              ...(location.pathname === "/unsent-letters" && styles.activeNavLink),
            }}
          >
            Unsent Letters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;

// Styles
const styles = {
  appContainer: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9F9",
    minHeight: "100vh",
  },
  nav: {
    backgroundColor: "#FFDAB9", // Soft Peach
    padding: "10px 20px", // Reduced padding to control navbar height
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky", // Make the navbar sticky
    top: 0,
    zIndex: 1000, // Ensure the navbar stays above other content
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px", // Fixed navbar height
  },
  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "90px", // Adjust logo size (increase or decrease as needed)
    width: "auto", // Maintain aspect ratio
  },
  navBrandLink: {
    textDecoration: "none",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "inline-block",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "600",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "background-color 0.3s, color 0.3s",
    ":hover": {
      backgroundColor: "#FF6F61", // Light Coral
      color: "#FFF",
    },
  },
  activeNavLink: {
    backgroundColor: "#FF6F61", // Light Coral for active link
    color: "#FFF",
  },
  content: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};