import React from 'react';

interface ExperienceItemProps {
    title: string;
    company: string;
    date: string;
    technologies: string;
    description: string[];
    link?: string; // Optional link for the title
    logo: string; // Logo URL or path
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
                                                           title,
                                                           company,
                                                           date,
                                                           technologies,
                                                           description,
                                                           logo
                                                       }) => {
    return (
        <li className="experience-item">
            <div className="experience-header">
                <div className="experience-main">
                    <div className="experience-title">
                        <span className="experience-title-name">{title}</span>
                        <span className="experience-date">{date}</span>
                    </div>
                    <div className={"logo-company"}>
                        <img src={logo} alt={`${company} logo`} className="experience-logo"/>
                        <span className="experience-company">{company}</span>
                    </div>
                    <span className="experience-tech">{technologies}</span>
                </div>
            </div>
            <ul className="experience-description">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </li>
    );
};

export default ExperienceItem;
