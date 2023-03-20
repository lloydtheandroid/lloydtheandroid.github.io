import React from 'react';
import '../styles/About.css';

const About = ({ about }) => {
  return (
    <div className="about">
      <h2 className="section-header">
        About
      </h2>
      <p>{about}</p>
    </div>
  );
};

export default About;
