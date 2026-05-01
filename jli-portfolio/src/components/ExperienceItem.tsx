import React from 'react';

interface ExperienceItemProps {
    title: string;
    company: string;
    date: string;
    technologies: string;
    description: string[];
    subRoles?: { title: string; date: string }[];
    link?: string; // Optional link for the title
    logo: string; // Logo URL or path
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
                                                           title,
                                                           company,
                                                           date,
                                                           technologies,
                                                           description,
                                                           subRoles,
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
                    {subRoles && subRoles.length > 0 && (
                        <div className="experience-subroles">
                            {subRoles.map((role) => (
                                <div className="experience-subrole" key={`${role.title}-${role.date}`}>
                                    <span className="experience-subrole-title">{role.title}</span>
                                    <span className="experience-subrole-date">{role.date}</span>
                                </div>
                            ))}
                        </div>
                    )}
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
