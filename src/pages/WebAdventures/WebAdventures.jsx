import "./WebAdventures.css";
import React, { useState } from "react";
import Bg from "../../assets/images/webDevBg.svg";
import WorkoutPlanner from "../../assets/images/workoutplanner.svg";
import GameDescription from "../../assets/images/Gamedescription.svg";
import flappy from "../../assets/images/flappybird.png";
import flappy2 from "../../assets/images/flappybird2.png";
import flappy3 from "../../assets/images/flappybird3.png";
import github from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

function WebAdventures() {
  const page1Images = [image1, image2, image3];
  const page2Images = [flappy, flappy2, flappy3];
  const [stackImages, setStackImages] = useState(page1Images);
  const [page2StackImages, setPage2StackImages] = useState(page2Images);

  const rotateLeft = (prev) => {
    if (prev.length <= 1) {
      return prev;
    }

    return [...prev.slice(1), prev[0]];
  };

  const handleStackClick = () => {
    setStackImages((prev) => rotateLeft(prev));
  };

  const handlePage2StackClick = () => {
    setPage2StackImages((prev) => rotateLeft(prev));
  };

  const [frontImage, backLeftImage, backRightImage] = stackImages;
  const [page2FrontImage, page2BackLeftImage, page2BackRightImage] = page2StackImages;

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
        <div className="image-stack" onClick={handleStackClick} role="button" tabIndex="0" aria-label="Click to cycle through project images">
          <div className="image back left">
            <img src={backLeftImage} alt="Back left project preview" />
          </div>
          <div className="image front">
            <img src={frontImage} alt="Front project preview" />
          </div>
          <div className="image back right">
            <img src={backRightImage} alt="Back right project preview" />
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
            <a href="https://github.com/trishasinghof-art" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://workout-planner-rosy-nu.vercel.app/" aria-label="Live Link">
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
            <a href="https://github.com/trishasinghof-art/Flappy_Bird" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://flappy-bird-delta-lemon.vercel.app/" aria-label="Live Link">
              <img src={linkIcon} alt="Live Link" />
            </a>
          </div>
        </div>

        {/* Right: Image stack */}
        <div className="image-stack" onClick={handlePage2StackClick} role="button" tabIndex="0" aria-label="Click to cycle through Flappy Bird images">
          <div className="image back left">
            <img src={page2BackLeftImage} alt="Back left Flappy Bird preview" />
          </div>
          <div className="image front">
            <img src={page2FrontImage} alt="Front Flappy Bird preview" />
          </div>
          <div className="image back right">
            <img src={page2BackRightImage} alt="Back right Flappy Bird preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebAdventures;
