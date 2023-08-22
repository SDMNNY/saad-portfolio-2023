import React from 'react';

const Project = ({ title, image, deployed, github }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={deployed}>Deployed App</a>
            <a href={github}>GitHub Repository</a>
        </div>
    );
}

export default Project;
