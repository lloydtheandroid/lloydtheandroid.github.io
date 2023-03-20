import React from 'react';
import '../styles/Summary.css';

const Summary = ({ summary }) => {
  return (
    <div className="summary">
      <h2 className="section-header">
        Summary
      </h2>
      <p>{summary}</p>
    </div>
  );
};

export default Summary;
