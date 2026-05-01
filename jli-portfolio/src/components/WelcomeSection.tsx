// src/components/WelcomeSection.tsx
import React from 'react';
import './WelcomeSection.css';
import art from '../assets/square.png'

const WelcomeSection: React.FC = () => {
    return (
        <section id="welcome" className="welcome-section">
            <div className="welcome-content">
                <div className="welcome-text-content">
                    <p className="welcome-eyebrow">Software Engineer • Digital Artist</p>
                    <h1 className="welcome-title">Hi, I&apos;m Jackson Li</h1>
                    <p className="welcome-description">
                        I build reliable software and visual art with personality.
                        Explore my work and see what I can bring to your team.
                    </p>
                    <div className="welcome-cta-row">
                        <a href="#projects" className="welcome-cta welcome-cta-primary">View Projects</a>
                        <a href="#experience" className="welcome-cta welcome-cta-secondary">Work Experience</a>
                    </div>
                </div>
                <div className="art-showcase">
                    <img src={art} alt="Showcased Art" className="showcased-art"/>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
