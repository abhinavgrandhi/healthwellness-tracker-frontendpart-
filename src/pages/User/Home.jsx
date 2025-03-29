import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./Home.css"; // Custom CSS for styling

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-pop-in">Welcome to Health Tracker</h1>
          <p className="hero-subtitle animate-pop-in">
            Your all-in-one solution to track steps, nutrition, and wellness.
          </p>
          <div className="hero-buttons animate-pop-in">
            <button className="btn btn-primary" onClick={() => setShowLogin(true)}>Login</button>
            <button className="btn btn-secondary" onClick={() => setShowRegister(true)}>Register</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Health Tracker?</h2>
        <div className="features-grid">
          <Link to="/steps" className="feature-card animate-slide-in-left">
            <i className="fas fa-walking feature-icon"></i>
            <h3>Step Tracking</h3>
            <p>Monitor your daily steps and stay active with real-time updates.</p>
          </Link>
          <Link to="/nutrition" className="feature-card animate-slide-in-up">
            <i className="fas fa-utensils feature-icon"></i>
            <h3>Nutrition Logging</h3>
            <p>Track your meals and maintain a balanced diet effortlessly.</p>
          </Link>
          <Link to="/dashboard" className="feature-card animate-slide-in-right">
            <i className="fas fa-chart-line feature-icon"></i>
            <h3>Dashboard</h3>
            <p>Get insights on your health progress and stay motivated.</p>
          </Link>
          <Link to="/profile" className="feature-card animate-slide-in-left">
            <i className="fas fa-user feature-icon"></i>
            <h3>Profile Management</h3>
            <p>Customize your preferences and manage your health goals.</p>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <blockquote className="testimonial-text">
            "Health Tracker has completely changed how I approach my fitness goals. It's simple, effective, and motivating!"
          </blockquote>
          <p className="testimonial-author">— Jane Doe</p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Transform Your Health?</h2>
        <p className="cta-subtitle">Join thousands of users who are achieving their wellness goals with Health Tracker.</p>
        <button className="btn btn-cta" onClick={() => setShowRegister(true)}>Get Started Now</button>
      </section>

      {/* Modal for Login */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login />
            <button className="close-modal" onClick={() => setShowLogin(false)}>X</button>
          </div>
        </div>
      )}

      {/* Modal for Register */}
      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Register />
            <button className="close-modal" onClick={() => setShowRegister(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
