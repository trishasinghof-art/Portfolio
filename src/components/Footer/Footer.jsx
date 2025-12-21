import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              Twitter
            </a>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
