import "./WebAdventures.css";
import React from "react";
import Bg from "../../assets/images/webDevBg.svg";
import WorkoutPlanner from "../../assets/images/workoutplanner.svg";
import GameDescription from "../../assets/images/Gamedescription.svg";
import flappy from "../../assets/images/flappybird.png";
import github from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

function WebAdventures() {
  return (
    <section className="web-adventures-section">
      {/* Background */}
      <img
        src={Bg}
        alt="Web Adventures Background"
        className="web-bg"
      />

      {/* ===== PAGE 1 ===== */}
      <div className="adventure-page">
        {/* Left: Image stack */}
        <div className="image-stack">
          <div className="image back left">
            <img src={image2} alt="Back left project preview" />
          </div>
          <div className="image front">
            <img src={image1} alt="Front project preview" />
          </div>
          <div className="image back right">
            <img src={image3} alt="Back right project preview" />
          </div>
        </div>

        {/* Right: Description image */}
        <div className="description-wrapper">
          <img
            src={WorkoutPlanner}
            alt="Project Description"
            className="description-placeholder"
          />

          <div className="sticky-links">
            <a href="#" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="#" aria-label="Live Link">
              <img src={linkIcon} alt="Live Link" />
            </a>
          </div>
        </div>
      </div>

      {/* ===== PAGE 2 ===== */}
      
      <div className="adventure-page">
        {/* Left: Description image */}
        <div className="description-wrapper">
          <img
            src={GameDescription}
            alt="Project Description"
            className="description-placeholder"
          />

          <div className="sticky-links">
            <a href="#" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="#" aria-label="Live Link">
              <img src={linkIcon} alt="Live Link" />
            </a>
          </div>
        </div>

        {/* Right: Image stack */}
        <div className="image-stack">
          <div className="image front image-front">
            <img src={flappy} alt="Flappy Bird project preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebAdventures;
