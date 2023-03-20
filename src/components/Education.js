import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Education.css';

// const Education = ({ education }) => {
//   if (!education || !Array.isArray(education) || education.length === 0) {
//     return null; // don't render anything if education is not defined, is not an array, or is an empty array
//   }

//   return (
//     <div className="education">
//       <h2 className="section-header">
//         Education
//       </h2>
//       {education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.degree} - {edu.institution}</h3>
//           <p>{edu.graduationDate}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Education;
const Education = ({ education }) => {
  const educationList = education.map((item) => (
    <li key={item.id} className="education-item">
      <div className="education-details">
        <div className="education-school">{item.school}</div>
        <div className="education-degree">{item.degree}</div>
        <div className="education-graduation">{item.graduationDate}</div>
      </div>
    </li>
  ));

  return (
    <section className="education-section">
      <h2>Education</h2>
      <ul className="education-list">{educationList}</ul>
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      graduationDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Education;