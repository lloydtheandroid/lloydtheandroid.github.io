import React from 'react';
import { FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = ({ email, phone, website }) => {
  return (
    <div className="contact">
      <h2 className="section-header">
        <FiMail className="section-icon" />
        Contact
      </h2>
      <div className="contact-info">
        <div className="contact-item">
          <FiMail />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="contact-item">
          <FiPhone />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className="contact-item">
          <FiGlobe />
          <a href={`http://${website}`}>{website}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
