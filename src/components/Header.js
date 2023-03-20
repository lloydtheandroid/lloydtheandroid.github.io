import React from 'react';
import '../styles/Header.css';

const Header = ({ name, title }) => {
  return (
    <div className="header">
      <h1 className="green-heading">{name}</h1>
      <h2 className="header-title">{title}</h2>
    </div>
  );
};

export default Header;
