// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#welcome">Welcome</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#art">Art</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
