// ExperienceItem.tsx
import React from 'react';

interface ExperienceItemProps {
    title: string;
    company: string;
    date: string;
    technologies: string;
    description: string[];
    link?: string; // Optional link for the title
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, technologies, description, link }) => {
    return (
        <li className="experience-item">
            <div className="experience-title">
                <h3>
                    <a href={link} className="title-link">{title}</a>
                </h3>
                <span className="experience-date">{date}</span>
            </div>
            <span className="experience-company">{company}</span>
            <span className="experience-tech">{technologies}</span>
            <ul className="experience-description">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </li>
    );
};

export default ExperienceItem;
