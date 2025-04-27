import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sectionId = e.target.value;
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <ul>
                        <li>Jackson Li</li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#art">Art</a></li>
                        <li><a href="#experience">Experience</a></li>
                    </ul>
                </div>

                {/* Mobile Dropdown */}
                <select className="mobile-dropdown" onChange={handleNavigation}>
                    <option value="">Navigate to...</option>
                    <option value="about">About</option>
                    <option value="projects">Projects</option>
                    <option value="art">Art</option>
                    <option value="experience">Experience</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
