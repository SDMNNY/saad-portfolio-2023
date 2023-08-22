import React from 'react';

const Resume = () => {
    return (
        <section>
            <a href="path/to/resume.pdf" download>Download Resume</a>
            <h2>Skills:</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                {/* // add more skills */}
            </ul>
        </section>
    );
}

export default Resume;
