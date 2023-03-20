import React from 'react';
import PropTypes from 'prop-types';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../styles/ContactInfo.css';

function ContactInfo({ email, phone, address, website, linkedin, github }) {
  return (
    <div className="contact-info">
      {email && (
        <div className="contact-info-item">
          <FiMail className="contact-info-icon" />
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            {email}
          </a>
        </div>
      )}

      {phone && (
        <div className="contact-info-item">
          <FiPhone className="contact-info-icon" />
          <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
            {phone}
          </a>
        </div>
      )}

      {address && (
        <div className="contact-info-item">
          <FiMapPin className="contact-info-icon" />
          <span>{address}</span>
        </div>
      )}

      {website && (
        <div className="contact-info-item">
          <FiGlobe className="contact-info-icon" />
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}

      {linkedin && (
        <div className="contact-info-item">
          <FiLinkedin className="contact-info-icon" />
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            {linkedin}
          </a>
        </div>
      )}

      {github && (
        <div className="contact-info-item">
          <FiGithub className="contact-info-icon" />
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github}
          </a>
        </div>
      )}
    </div>
  );
}

ContactInfo.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default ContactInfo;
