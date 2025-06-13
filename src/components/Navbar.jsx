import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <h2 className="logo">FoodLocator</h2>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Find a Food Bank</a></li>
                    <li><a href="#">Your Food Manager</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
        </nav>
    );
}
