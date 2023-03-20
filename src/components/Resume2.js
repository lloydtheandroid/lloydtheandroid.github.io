const Resume = () => {
    const [contactInfo, setContactInfo] = useState({
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(123) 456-7890',
      address: '123 Main Street, Anytown USA 12345',
      website: 'johndoe.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    });
  
    const [skills, setSkills] = useState([
      { id: '1', title: 'HTML/CSS', level: '70%' },
      { id: '2', title: 'JavaScript', level: '80%' },
      { id: '3', title: 'React', level: '75%' },
      { id: '4', title: 'Node.js', level: '60%' },
      { id: '5', title: 'SQL', level: '65%' },
      { id: '6', title: 'Git', level: '70%' },
    ]);
  
    const [education, setEducation] = useState([
      {
        id: '1',
        school: 'University of XYZ',
        degree: 'Bachelor of Science in Computer Science',
        graduationDate: 'May 2018',
        location: 'Anytown USA',
      },
    ]);
  
    const [experience, setExperience] = useState([
      {
        id: '1',
        company: 'ABC Corporation',
        position: 'Software Engineer',
        startDate: 'June 2018',
        endDate: 'Present',
        location: 'Anytown USA',
        description:
          'Worked on various projects and developed software solutions to meet business needs.',
      },
    ]);
  
    return (
      <div className="resume">
        <Header name={contactInfo.name} />
        <ContactInfo contactInfo={contactInfo} />
        <Summary />
        <Skills skills={skills} setSkills={setSkills} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </div>
    );
  };
  
  export default Resume;