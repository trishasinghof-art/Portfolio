import './DesignGallery.css';

function DesignGallery() {
  return (
    <div className="design-gallery">
      <div className="container">
        <div className="design-gallery-header">
          <h1 className="design-gallery-title">Design Gallery</h1>
          <p className="design-gallery-description">
            A showcase of my design work. Replace these with your actual design 
            projects, mockups, and creative work.
          </p>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-item-image">
              Design Image
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">Design One</h3>
              <p className="gallery-item-description">
                Description of your first design project. Explain your design process 
                and inspiration.
              </p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-item-image">
              Design Image
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">Design Two</h3>
              <p className="gallery-item-description">
                Description of your second design project. Highlight the key design 
                elements and choices.
              </p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-item-image">
              Design Image
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">Design Three</h3>
              <p className="gallery-item-description">
                Description of your third design project. Share the impact and 
                results of your design.
              </p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-item-image">
              Design Image
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">Design Four</h3>
              <p className="gallery-item-description">
                Description of your fourth design project. Add your personal touch 
                and unique style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignGallery;
