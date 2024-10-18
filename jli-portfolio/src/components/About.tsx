// src/components/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>
                I'm a software engineer with experience in cloud computing, game development, and full-stack web development.
                I've collaborated on diverse projects, from building game mechanics to developing APIs and backend systems.
                A UBC graduate, I’m always eager to learn and passionate about building solutions that make an impact.
            </p>
            <p>
                I enjoy working with AWS, Scala, MongoDB, Python, and modern web frameworks. My strong teamwork skills and problem-solving ability drive my success in technical environments.
                I'm also passionate about digital art, which inspires creative approaches in software design.
            </p>
        </section>
    );
};

export default About;
