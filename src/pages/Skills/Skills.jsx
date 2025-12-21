import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills-header">
          <h1 className="skills-title">My Skills</h1>
          <p className="skills-description">
            Here are the technologies and tools I work with. Replace this content 
            with your actual skills and expertise.
          </p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-card-title">Frontend Development</h3>
            <p className="skill-card-description">
              HTML, CSS, JavaScript, React, and more. Add your specific skills here.
            </p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-card-title">Backend Development</h3>
            <p className="skill-card-description">
              Node.js, Python, databases, and APIs. Describe your backend expertise.
            </p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-card-title">Design</h3>
            <p className="skill-card-description">
              UI/UX design, Figma, Adobe XD. Share your design capabilities here.
            </p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-card-title">Other Tools</h3>
            <p className="skill-card-description">
              Git, Docker, CI/CD, and more. List additional tools you use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
