import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Skills.css';

const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => (
    <li key={skill.id} className="skill-item">
      <div className="skill-title">{skill.title}</div>
      <div className="skill-level" style={{ width: skill.level }}>
        <span>{skill.level}</span>
      </div>
    </li>
  ));

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">{skillsList}</ul>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Skills;

