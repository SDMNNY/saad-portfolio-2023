import React from 'react';
import './Project.css';

const Project = ({ title, image, deployed, github }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>
                <a href={deployed} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </div>
    );
}

export default Project;
