import './WebAdventures.css';

function WebAdventures() {
  return (
    <div className="web-adventures">
      <div className="container">
        <div className="web-adventures-header">
          <h1 className="web-adventures-title">Web Adventures</h1>
          <p className="web-adventures-description">
            Explore my web development projects. Replace these placeholders with 
            your actual projects and accomplishments.
          </p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-card-image">
              Project Image
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">Project One</h3>
              <p className="project-card-description">
                Description of your first web project. Add details about the 
                technologies used and what you built.
              </p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-card-image">
              Project Image
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">Project Two</h3>
              <p className="project-card-description">
                Description of your second web project. Highlight the key features 
                and your role in the project.
              </p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-card-image">
              Project Image
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">Project Three</h3>
              <p className="project-card-description">
                Description of your third web project. Share what challenges you 
                overcame and what you learned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAdventures;
