import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to My Portfolio</h1>
          <h2 className="home-hero-subtitle">Designer & Developer</h2>
          <p className="home-hero-description">
            Creating beautiful and functional digital experiences. 
            Explore my work and get to know what I do.
          </p>
        </div>
      </section>
      
      <section className="home-section">
        <div className="container">
          <h2 className="home-section-title">What I Do</h2>
          <p className="home-section-content">
            This is a placeholder for your introduction. Add your own content here 
            to tell visitors about your expertise, passion, and what makes you unique.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
