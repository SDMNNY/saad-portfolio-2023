import React from 'react';
import Project from './Project';

const Portfolio = () => {
    const projects = [
        {
            title: "Project 1",
            image: "path/to/image1.jpg",
            deployed: "http://link-to-deployed-app1.com",
            github: "http://github-link1.com",
        },
        // Add more projects
    ];

    return (
        <section>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

export default Portfolio;

