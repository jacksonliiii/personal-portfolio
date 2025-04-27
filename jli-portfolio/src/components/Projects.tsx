// src/components/Projects.tsx
import React from 'react';
import './Projects.css';
import pirateRushTN from '../assets/pirate-rush-tn.jpg';
import L3TN from '../assets/l3_logo.png';
import raycast from '../assets/raycast.png';
import ct from '../assets/constellation-tango.png';

interface Project {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    date: string;
}

const projects: Project[] = [{
    title: "RayCast",
    link: "https://teamlightbox.itch.io/raycast",
    description: "A vibrant puzzle game about reflecting and bending light made using C++ and OpenGL.",
    thumbnail: raycast,
    date: "2024"
}, {
    title: "Pirate Rush",
    link: "https://pirate-rush.onrender.com/",
    description: "A fast-paced pirate adventure! (NOTE: link will take a while to spin up).",
    thumbnail: pirateRushTN,
    date: "2023"
}, {
    title: "L3",
    link: "https://github.com/byuen88/L3",
    description: "Cloud-based, serverless Leaderboard app for League of Legends stats.",
    thumbnail: L3TN,
    date: "2024"
}, {
    title: "Constellation Tango",
    link: "https://store.steampowered.com/app/1721360/Constellation_Tango/",
    description: "Space-themed tactical game released on Steam!",
    thumbnail: ct,
    date: "2022"
},];

const Projects: React.FC = () => {
    return (<section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (<div key={project.title} className="project-card">
                        <a className={"project-link"} href={project.link} target="_blank"
                           rel="noopener noreferrer">
                            <img src={project.thumbnail} alt={`${project.title} thumbnail`}
                                 className="project-thumbnail"/>
                        </a>
                        <div className="project-details">
                            <div className="project-info">
                                <h3>{project.title}</h3>

                            </div>
                            <p>{project.description}</p>
                            <p className="project-date">{project.date}</p>
                        </div>
                    </div>))}
            </div>
        </section>);
};

export default Projects;
