import "./WebAdventures.css";
import React from "react";
import Bg from "../../assets/images/webDevBg.svg";
import GameDes from "../../assets/images/GameDescription.svg";
import note from "../../assets/images/Sticky.svg";
import github from "../../assets/icons/github.svg";

function WebAdventures() {
  return (
    <section className="web-adventures-section">
      {/* Background placeholder */}
      <img
        src={Bg}
        alt="Web Adventures Background"
        className="web-bg"
      />

      {/* ===== PAGE 1 ===== */}
      <div className="adventure-page">
        {/* Left: Image stack */}
        <div className="image-stack">
          <div className="image back left"></div>
          <div className="image front"></div>
          <div className="image back right"></div>
        </div>

        {/* Right: Description placeholder */}
        <div className="description-wrapper">
          <img
            src={GameDes}
            alt="Project Description"
            className="description-placeholder"
          />

          {/* Sticky links */}
          <div className="sticky-links">
            <a href="#" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="#" aria-label="Live Link">
              <img src="/placeholders/link-icon.png" alt="Live Link" />
            </a>
          </div>
        </div>
      </div>

      {/* ===== PAGE 2 ===== */}
      <div className="adventure-page reverse">
        {/* Left: Description placeholder */}
        <div className="description-wrapper">
          <img
            src="/placeholders/project-description-2.png"
            alt="Project Description"
            className="description-placeholder"
          />

          <div className="sticky-links">
            <a href="#" aria-label="GitHub">
              <img src="/placeholders/github-icon.png" alt="GitHub" />
            </a>
            <a href="#" aria-label="Live Link">
              <img src="/placeholders/link-icon.png" alt="Live Link" />
            </a>
          </div>
        </div>

        {/* Right: Image stack */}
        <div className="image-stack">
          <div className="image back left"></div>
          <div className="image front"></div>
          <div className="image back right"></div>
        </div>
      </div>
    </section>
  );
}

export default WebAdventures;
