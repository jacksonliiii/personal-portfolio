// src/components/Projects.tsx
import React from 'react';
import './Projects.css';
import pirateRushTN from '../assets/pirate-rush-tn.jpg';

interface Project {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    date: string;
}

const projects: Project[] = [
    {
        title: "L3",
        link: "tbd",
        description: "Leaderboard system for League of Legends stats.",
        thumbnail: "/path/to/l3-thumbnail.jpg",
        date: "2024"
    },
    {
        title: "RayCast",
        link: "tbd",
        description: "A light-bouncing puzzle game.",
        thumbnail: "/path/to/raycast-thumbnail.jpg",
        date: "2023"
    },
    {
        title: "Pirate Rush",
        link: "https://pirate-rush.onrender.com/",
        description: "A fast-paced pirate adventure.",
        thumbnail: pirateRushTN,
        date: "2023"
    },
    {
        title: "Constellation Tango",
        link: "tbd",
        description: "Space-themed tactical game.",
        thumbnail: "/path/to/constellationtango-thumbnail.jpg",
        date: "2022"
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-thumbnail"/>
                        <div className="project-details">
                            <div className="project-info">
                                <a className={"project-link"} href={project.link} target="_blank"
                                   rel="noopener noreferrer">
                                    <h3>{project.title}</h3>
                                </a>
                            </div>
                            <p>{project.description}</p>
                            <p className="project-date">{project.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
