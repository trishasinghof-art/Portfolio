import "./Introduction.css";
import idCardImage from "../../assets/images/idcard.svg";
import checkerStripImage from "../../assets/images/checker-strip.svg";
import Skills from "../Skills/Skills";
import WebAdventures from "../WebAdventures/WebAdventures";
import DesignGallery from "../DesignGallery/DesignGallery";

function Introduction() {
  return (
    <>
      {/* INTRODUCTION SECTION */}
      <section className="introduction">
      <div className="intro-container">
        {/* Left side – ID Card Placeholder */}
        <div className="id-card-wrapper">
          <img
            src={idCardImage}
            alt="ID Card"
            className="id-card-image"
          />
        </div>

        {/* Right side – Greeting Text */}
        <div className="intro-text">
          <h1>
            Hello ✨ <br />
            I’m <span>Trisha</span>!
          </h1>

          <p>
            Hi, I’m someone who loves turning ideas into simple, purposeful, 
            and visually pleasant experiences. As a growing UI/UX designer and
             frontend developer, I’m continuously exploring new tools, concepts,
              and approaches that help me evolve. I believe that design is a journey
               — one where I learn something new with every interface I create and 
               every feature I develop. I’m still discovering my style and strengths, 
               but I’m excited about the endless possibilities this field offers. 
               Each challenge helps me grow, and every project brings me one step 
               closer to the designer and developer I aspire to become.
          </p>
          {/* Resume Download Button */}
          <a 
            href="/Trisha_Singh_Resume.pdf" 
            className="resume-btn"
            download="Trisha_Singh_Resume.pdf"
            aria-label="Download resume PDF"
          >
            <svg 
              className="resume-btn-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume</span>
          </a>        </div>
      </div>

      {/* Bottom checker strip placeholder */}
      <div className="checker-strip">
        <img
          src={checkerStripImage}
          alt="Checker strip"
        />
      </div>
    </section>

    {/* SKILLS SECTION */}
    <Skills />

    {/* WEB ADVENTURES SECTION */}
    <WebAdventures />

    {/* DESIGN GALLERY SECTION */}
    <DesignGallery />
    </>
  );
}

export default Introduction;
