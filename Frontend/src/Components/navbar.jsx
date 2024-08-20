import React from 'react';

import { Link } from 'react-router-dom';
import image from "./images/logo.png"

function Layout({ children }) {
    return (
        <div>
            <nav className="navbar-main">
                <div className="navbar-logo-main">
                    <Link to="/"><img className="logo-main" src={image}></img></Link>
                </div>
                <ul className="navbar-links-main">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/filtration">Filtration</Link></li>
                </ul>
                <div className="navbar-profile-main">
                    <a href="/profile"><img src="/path-to-your-profile-pic.jpg" alt="Profile" className="profile-pic-main" /></a>
                    <span className="username-main">Username</span>
                </div>
            </nav>
            <div className="content-main">
                {children}
            </div>
            <div class="footer-div">
                <div class="footer-links-container">
                    <div class="footer-content">
                        <a href="aboutus" class="footer-link">About Us</a>
                    </div>

                    <div class="footer-content">
                        <a href="contactus" class="footer-link">Contact</a>
                    </div>

                    <div class="footer-content">
                        <a href="#" class="footer-link">Privacy Policy</a>
                    </div>

                    <div class="footer-content">
                        <a href="#" class="footer-link">Terms of Service</a>
                    </div>

                    <div class="footer-content">
                        <a href="#" class="footer-link">Help</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;