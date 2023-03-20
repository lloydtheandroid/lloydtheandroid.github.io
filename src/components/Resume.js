import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import ContactInfo from './ContactInfo';
import '../styles/Resume.css';

const contactInfo = {
  name: 'Lloyd Garrison',
  title: 'Full Stack Web Developer and Senior IT Systems Engineer',
  email: 'lloyd.h.garrison@gmail.com',
  phone: '706-987-9703',
  address: 'San Antonio, TX',
  website: 'lloydtheandroid.com',
  linkedin: 'www.linkedin.com/in/lloydhgarrison',
  github: 'https://github.com/lloydtheandroid',
};

const summaryText = 'Senior IT Systems Engineer with over 20 years \
experience in Systems Security and Network Operations; I have a \
background in software and web development using Python, Java, and \
various JavaScript frameworks. I have had several roles where I \
served as Project Manager and extensive experience in IT Service \
Management and developing solutions for businesses.';

const skills = [
  { id: '1', title: 'Python', level: '80%' },
  { id: '2', title: 'Automation / Scripting', level: '90%' },
  { id: '3', title: 'Cloud Computing', level: '95%' },
  { id: '4', title: 'Java', level: '65%' },
  { id: '5', title: 'CyberSecurity', level: '85%' },
  { id: '6', title: 'Web Development', level: '75%' },
];

const education = [
  {
    id: '1',
    school: 'University of XYZ',
    degree: 'Bachelor of Science in Computer Science',
    graduationDate: 'May 2015',
  },
  {
    id: '2',
    school: 'ABC Community College',
    degree: 'Associate of Applied Science in Web Development',
    graduationDate: 'May 2012',
  },
];

const experience = [
  {
    title: 'Medical Information Systems Capability Developer, US Army',
    company: 'US Army Future Command',
    dates: 'July 2020 - Present',
    description: 'Develop and integrate medical capabilities to enhance the readiness of the US Army Operational Medicine\
    Collaborate with stakeholders to identify capability gaps and develop solutions to meet operational requirements\
    Conduct capability assessments and gap analysis to inform the development of medical solutions\
    Develop and implement medical solutions that comply with industry standards and regulations\
    Provide guidance and mentorship to junior capability developers and analysts\
    Collaborate with cross-functional teams to ensure compliance with industry standards and regulations\
    Plan, organize, and execute various experiments throughout the year to validate materiel solutions (hardware and software).'    
  },
  {
    title: 'Senior Cyber Security Engineer',
    company: 'GDIT',
    dates: 'October 2019 - July 2020',
    description:
      "Plan, design and implement security solutions for the organization's network and systems\
      Perform risk assessments and identify vulnerabilities to develop and implement remediation strategies\
      Conduct penetration testing to identify potential weaknesses in the systems\
      Develop and implement security policies and procedures\
      Provide guidance and mentorship to junior security engineers and analysts\
      Collaborate with cross-functional teams to ensure compliance with industry standards and regulations\
      Conduct security training for employees to promote security awareness and best practices\
      Monitor security events and alerts to respond to security incidents in a timely and effective manner"
  },
  {
    title: 'Project Manager and Lead Developer',
    company: 'Def-Logix',
    dates: 'April 2017 - October 2019',
    description: 
      'Project Manager and Technical Lead for a 8-person software development team.\
      Developed solutions in python, react js, and Java. \
      Implemented automated testing and CI/CD pipelines into Gitlab, utilizing Ansible, Vagrant, Docker containers and various other automation frameworks. \
      Designed, deployed, and managed a small business network and domain; which includes VMWare, Windows, Active Directory, and Linux operating systems\
      Performed QA Testing and integration for several projects using various technologies\
      Automated tests, builds, configurations, and deployments using python, powershell, and/or Linux shell scripts.'
  },
  {
    title: 'Senior Network Engineer',
    company: 'Milestone Technologies',
    dates: 'June 2015 - August 2016',
    description: 
      'Network Engineer for several projects including a large Enterprise Network, 2 national nonprofits, and small businesses. \
      Resolved incidents, service and maintenance requests, and projects relevant to supporting client enterprise network infrastructure.\
      Automated network configurations and deployments using Python and bash. \
      Provided remote support and actively monitored networks for 50+ global office locations and 8 data centers.\
      Performed root cause analysis, routine implementations, and network configurations\
      Deployed and managed the Cisco Meraki network for large, national nonprofit organization'
  },
  {
    title: 'Network Engineer',
    company: 'World Wide Technology',
    dates: 'October 2013 - June 2015',
    description: 
      'Enterprise Network Project Engineer for U.S. Army Special Operations Command.\
      Provided Tier 3 Network Operations support and troubleshooting, responded to outages and trouble tickets\
      Designed, deployed, and supported an MPLS transport network encompassing over 60 locations in support of over 5,000 users.\
      Led the network team for new project installation serving over 1,000 users, and personally recognized by client for outstanding support.\
      Operated and managed Cisco IOS, Cisco ISE, Cisco Call Manager, TACACS, Firewalls, and encryption Devices.'
  },
];

const Resume = () => {
  return (
    <div className="resume">
      <Header name={contactInfo.name} title={contactInfo.title} />
      <ContactInfo {...contactInfo} />
      <Summary summary={summaryText} />
      <Skills skills={skills} />
      <Education education={education} />
      <Experience experiences={experience} />
    </div>
  );
};

export default Resume;