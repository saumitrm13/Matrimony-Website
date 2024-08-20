// src/Components/LearnMore.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const LearnMore = () => {
  return (
    <div className="container my-5">
      {/* Header with Logo */}
      <header className="text-center mb-4">
        <img src={logo} alt="Matrimony Site Logo" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
        <h1>Welcome to MyMatrimonySite</h1>
      </header>

      {/* Main Content */}
      <section>
        <h2>About Us</h2>
        <p>
          At MyMatrimonySite, we are dedicated to helping you find your perfect match. Our platform connects individuals based on shared interests, values, and preferences to foster meaningful and lasting relationships.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to create a trustworthy and user-friendly environment where individuals can connect and build relationships that lead to lifelong companionship. We are committed to offering a secure and respectful space for all our users.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Advanced Matchmaking: Utilize our sophisticated algorithms to find your ideal partner.</li>
          <li>Privacy and Security: We prioritize your privacy with robust security measures.</li>
          <li>Easy Navigation: Enjoy a seamless experience with our intuitive user interface.</li>
          <li>24/7 Support: Our support team is available around the clock to assist you.</li>
        </ul>

        <h2>Get Started</h2>
        <p>
          Ready to meet your match? <Link to="/register" className="btn btn-primary">Sign Up Now</Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-4">
        <p>&copy; 2024 MyMatrimonySite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LearnMore;
