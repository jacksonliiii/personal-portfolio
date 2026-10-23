// Experience.tsx
import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';
import ubc from '../assets/ubc-logo.png';
import semtech from '../assets/semtech-logo.png';
import mh from '../assets/macrohealth-logo.png';
import gr from '../assets/gr-logo.png';


const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <h2>Work Experience</h2>
            <ul className="experience-list">
                <ExperienceItem
                    title="Software Engineering"
                    company="Global Relay"
                    date="September 2025 - Present"
                    technologies="Java, Spring Boot, Python, Opensearch, Apache Flink"
                    subRoles={[
                        {
                            title: "Junior Software Developer",
                            date: "March 2026 - Present"
                        },
                        {
                            title: "Software Developer Intern",
                            date: "September 2025 - March 2026"
                        }
                    ]}
                    description={[
                        "Transitioned from Software Developer Intern to Junior Software Developer and continued owning ingestion and pipeline reliability improvements.",
                    ]}
                    logo={gr}
                />

                <ExperienceItem
                    title="Software Engineer Co-op"
                    company="MacroHealth"
                    date="September 2023 - August 2024"
                    technologies="Scala, MongoDB, JavaScript, Apache Nifi"
                    description={["Cut claim data generation time by 35% in Scala, built a standardized claim data model with REST APIs."
                    ]}
                    logo={mh}
                />

                <ExperienceItem
                    title="Software Engineer Co-op"
                    company="Semtech"
                    date="September 2022 - April 2023"
                    technologies="Python, Jenkins, Groovy, Docker"
                    description={[
                        "Improved Jenkins CI/CD pipeline run time by 14% with Groovy optimizations and automated device model testing with PowerShell."
                    ]}
                    logo={semtech}
                />

                <ExperienceItem
                    title="Undergraduate Teaching Assistant"
                    company="University of British Columbia"
                    date="September 2024 - December 2024"
                    technologies="TypeScript, JavaScript, CSS"
                    description={[
                        "Provided technical guidance to students for their TypeScript projects.",
                        "Led bi-weekly scrum meetings, removing blockers, and promoting Agile best practices.",
                    ]}
                    logo={ubc}
                />
            </ul>
        </section>
    );
};

export default Experience;
