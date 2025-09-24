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
                    title="Software Developer Intern"
                    company="Global Relay"
                    date="September 2025 - Current"
                    technologies="Java, Python, Ansible, Opensearch, Grafana"
                    description={[
                        "Improved Grafana dashboards using Python scripting, OpenSearch, and Ansible to aid API monitoring."
                    ]}
                    logo={gr}
                />

                <ExperienceItem
                    title="Software Engineer Co-op"
                    company="MacroHealth"
                    date="September 2023 - August 2024"
                    technologies="Scala, MongoDB, JavaScript, Apache Nifi"
                    description={[
                        "Accelerated claim data generation time by 35% by optimizing processor code to batch transactions.",
                        "Fixed and developed various components for internal software platform, enhancing usability.",
                        "Built data model to standardize claim info and created REST APIs for data processing.",
                        "Wrote data validation scripts using JavaScript and MongoDB, ensuring accuracy.",
                    ]}
                    logo={mh}
                />

                <ExperienceItem
                    title="Software Engineer Co-op"
                    company="Semtech"
                    date="September 2022 - April 2023"
                    technologies="Python, Jenkins, Groovy, Docker"
                    description={[
                        "Accelerated Jenkins CI/CD pipeline run time by 14% by optimizing scripts in Groovy.",
                        "Automated device model testing process using PowerShell scripting, eliminating manual steps.",
                    ]}
                    logo={semtech}
                />

                <ExperienceItem
                    title="Undergraduate Teaching Assistant"
                    company="University of British Columbia"
                    date="September 2024 - December 2024"
                    technologies="TypeScript, JavaScript, CSS"
                    description={[
                        "Provided technical guidance to students in debugging TypeScript projects.",
                        "Led bi-weekly scrum meetings, removing blockers, and promoting Agile best practices.",
                    ]}
                    logo={ubc}
                />
            </ul>
        </section>
    );
};

export default Experience;
