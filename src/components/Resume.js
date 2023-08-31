import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Education</h2>
      <div>
        <h3>Columbia University, Fullstack Developer Bootcamp</h3>
        <p>Completion: July 2022</p>
      </div>
      <div>
        <h3>Molloy College, Rockville Centre, NY</h3>
        <p>Bachelor of Science in Biology, cum laude, May 2019</p>
        <p>Honors: Molloy Grant, Biology Community Award</p>
      </div>

      <h2>Skills</h2>
      <p>Heroku, Git, Figma, Node.js, and more...</p>
      <p>Languages: Fluent in Urdu and Punjabi, Level 1 in ASL</p>
      <p>Software: Microsoft Office Suite, Google Workspace</p>

      <h2>Projects</h2>
      {/* You can map these from an array of project objects if you want */}
      <div>
        <h3><a href="https://github.com/Lunirs/impact-studios-carbon-tracker">Carbon Tracker</a></h3>
        <p>Developed using Materialize CSS Framework and more...</p>
      </div>
      <div>
        <h3><a href="https://github.com/SDMNNY/get-pawned-chess-game-">Get Pawned Chess Game</a></h3>
        <p>Developed using Node.js and Express and more...</p>
      </div>
      {/* Add more projects */}

      <h2>Work Experience</h2>
      <div>
        <h3>Case Investigator, New York State Contact Tracing Initiative</h3>
        <p>January 2021 - March 2022</p>
        <p>Public Health Training certification from John Hopkins and more...</p>
      </div>
      <div>
        <h3>Medical Assistant, Complete Orthopedics, Queens, NY</h3>
        <p>May 2019 – March 2020</p>
        <p>Conducted patient intakes and more...</p>
      </div>
    </section>
  );
}

export default Resume;
