import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import poemImage from "./poem.png"; // Import the poem image

const HomePage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle card clicks
  const handleCardClick = (path) => {
    navigate(path);
  };

  // Function to handle hover effects
  const handleHover = (index) => {
    setHoveredCard(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroHeading}>Welcome to Epiphany</h1>
        <p style={styles.heroText}>
          Write heartfelt letters to your future self, loved ones, or simply express your emotions in a private space.
        </p>
        <button
          style={styles.ctaButton}
          onClick={() => handleCardClick("/email-for-future-me")}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.sectionHeading}>Why Choose Epiphany?</h2>
        <div style={styles.featuresContainer}>
          {/* Email for Future Me Card */}
          <div
            style={{
              ...styles.featureCard,
              transform: hoveredCard === 0 ? "translateY(-10px)" : "translateY(0)",
              boxShadow: hoveredCard === 0 ? "0 8px 12px rgba(0, 0, 0, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.featureTitle}>✉️ Schedule Emails to Your Future Self</h3>
            <p style={styles.featureText}>
              Write a letter to your future self and schedule it to be delivered on a specific date.
            </p>
          </div>

          {/* Digital Letters Card */}
          <div
            style={{
              ...styles.featureCard,
              transform: hoveredCard === 1 ? "translateY(-10px)" : "translateY(0)",
              boxShadow: hoveredCard === 1 ? "0 8px 12px rgba(0, 0, 0, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.featureTitle}>💌 Store Digital Letters for Loved Ones</h3>
            <p style={styles.featureText}>
              Write heartfelt letters for someone special and share them via email or a secure access code.
            </p>
          </div>

          {/* Unsent Letters Card */}
          <div
            style={{
              ...styles.featureCard,
              transform: hoveredCard === 2 ? "translateY(-10px)" : "translateY(0)",
              boxShadow: hoveredCard === 2 ? "0 8px 12px rgba(0, 0, 0, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.featureTitle}>📜 Unsent Letters for Personal Reflection</h3>
            <p style={styles.featureText}>
              A private space to write letters that are never sent but help you express your emotions.
            </p>
          </div>
        </div>
      </div>

      {/* Poem Section */}
      <div style={styles.poemSection}>
        <div style={styles.poemImageContainer}>
          <img
            src={poemImage} // Use the imported image
            alt="Poem: Epiphany"
            style={styles.poemImage}
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Words have the power to heal, inspire, and connect. Thank you for letting Epiphany be a part of your journey.
        </p>
        <div style={styles.socialLinks}>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href="mailto:youremail@example.com"
            style={styles.socialLink}
          >
            Contact Us
          </a>
        </div>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Epiphany. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

// Styles
const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9F9",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#FFDAB9", // Soft Peach
    borderRadius: "12px",
    marginBottom: "40px",
  },
  heroHeading: {
    fontSize: "48px",
    color: "#333",
    marginBottom: "16px",
    fontFamily: "'Playfair Display', serif",
  },
  heroText: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
  },
  ctaButton: {
    backgroundColor: "#FF6F61", // Light Coral
    color: "#FFF",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
    marginTop: "20px",
    ":hover": {
      backgroundColor: "#88D8C0", // Soft Teal
    },
  },
  poemSection: {
    padding: "40px 20px",
    textAlign: "center",
    borderRadius: "12px",
    marginBottom: "40px",
    backgroundColor: "#FFF", // White background for contrast
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  poemImageContainer: {
    maxWidth: "600px", // Adjusted width for elegance
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#FFF", // White background for the container
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  poemImage: {
    width: "100%", // Make the image responsive
    borderRadius: "8px", // Soft rounded corners
    border: "1px solid #E6E6FA", // Subtle border
  },
  featuresSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  sectionHeading: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Playfair Display', serif",
  },
  featuresContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  featureCard: {
    flex: "1 1 300px",
    backgroundColor: "#FFF",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  featureTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "12px",
    fontFamily: "'Playfair Display', serif",
  },
  featureText: {
    fontSize: "16px",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#FFF", // White background
    borderTop: "1px solid #E6E6FA", // Subtle border
    marginTop: "40px",
  },
  footerText: {
    fontSize: "16px",
    color: "#333",
    fontStyle: "italic",
    marginBottom: "16px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "16px",
  },
  socialLink: {
    textDecoration: "none",
    color: "#FF6F61", // Light Coral
    fontSize: "16px",
    fontWeight: "600",
    transition: "color 0.3s",
    ":hover": {
      color: "#88D8C0", // Soft Teal on hover
    },
  },
  copyright: {
    fontSize: "14px",
    color: "#555",
  },
};