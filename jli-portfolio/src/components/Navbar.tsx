// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css'; // Link to the navbar-specific styles

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <ul>
                        <li><a href="#about">Jackson Li</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#art">Art</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
