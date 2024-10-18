// src/components/WelcomeSection.tsx
import React from 'react';
import './WelcomeSection.css';
import art from '../assets/square.png'

const WelcomeSection: React.FC = () => {
    return (
        <section id="welcome" className="welcome-section">
            <div className="welcome-content">
                <div className="welcome-text-content">
                    <h1 className="welcome-title">Welcome to My Portfolio!</h1>
                    <p className="welcome-description">
                        Discover my journey in software engineering, game dev, and digital art.
                    </p>
                </div>
                <div className="art-showcase">
                    <img src={art} alt="Showcased Art" className="showcased-art"/>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
