// src/components/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>
                Hello! I'm a recent UBC CS graduate, nice to meet you!
            </p>
            <p>
            I've got plenty of SWE experience, a passion for working on cool projects and an addiction to doodling. Thanks for checking out my page!
            </p>
        </section>
    );
};

export default About;
