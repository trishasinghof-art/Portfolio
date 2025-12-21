import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2 className="about-section-title">Who I Am</h2>
            <p className="about-text">
              Replace this with your personal introduction. Tell your story, share 
              your background, and explain what drives you in your work.
            </p>
            <p className="about-text">
              Add more paragraphs to give visitors a comprehensive understanding of 
              who you are as a professional and as a person.
            </p>
          </div>
          
          <div className="about-section">
            <h2 className="about-section-title">What I Do</h2>
            <ul className="about-list">
              <li className="about-list-item">
                Web Development - Building responsive and modern websites
              </li>
              <li className="about-list-item">
                UI/UX Design - Creating intuitive and beautiful user interfaces
              </li>
              <li className="about-list-item">
                Problem Solving - Finding creative solutions to complex challenges
              </li>
              <li className="about-list-item">
                Continuous Learning - Always exploring new technologies and methods
              </li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2 className="about-section-title">My Journey</h2>
            <p className="about-text">
              Share your professional journey here. Talk about how you got started, 
              key milestones, and where you're headed.
            </p>
            <p className="about-text">
              Include any significant achievements, certifications, or experiences 
              that have shaped your career path.
            </p>
          </div>
          
          <div className="about-contact">
            <h2 className="about-contact-title">Let's Connect</h2>
            <p className="about-contact-text">
              Interested in working together or just want to say hi?
            </p>
            <a href="mailto:your.email@example.com" className="about-contact-email">
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
