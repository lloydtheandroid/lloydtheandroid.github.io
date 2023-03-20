import React from 'react';
import '../styles/Experience.css';

const Experience = ({ experiences }) => {
  if (!experiences || !Array.isArray(experiences) || experiences.length === 0) {
    return null; // don't render anything if experiences is not defined, is not an array, or is an empty array
  }

  return (
    <div className="experience">
      <h2 className="section-header">
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>{experience.title} - {experience.company}</h3>
          <p>{experience.dates}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;