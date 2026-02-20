import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// IMPORT FOLDER PANELS
import folderBack from "../../assets/gallery/FolderBack.svg";
import folderFront from "../../assets/gallery/FolderFront.svg";
import portal1 from "../../assets/fileImage/portal1.png";
import carousal1 from "../../assets/fileImage/carousal1.png";
import agrisense1 from "../../assets/fileImage/agrisense1.png";
import carousal2 from "../../assets/fileImage/carousal2.png";
import anime1 from "../../assets/fileImage/anime1.png";
import fooddel1 from "../../assets/fileImage/fooddel1.png";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToIntroduction = () => {
    navigate("/introduction");
  };

  return (
    <div className="Home-container">

      {/* HEADING */}
      <h1 className="portfolio-heading">
        <span className="port-text">PORT</span>
        <span className="folio-text">folio</span>
      </h1>

      {/* LEFT COLUMN */}
      <div className="side-column left-column">
        <div className="side-text">
          <p>
            portfolio — a space that brings together my work, creativity, 
            and passion for building meaningful digital experiences. 
            I believe that design and development are not just about
             creating something visually appealing, but about understanding
              the purpose behind every detail.
          </p>

          <p>
            Every project I take on is an opportunity to explore new 
            ideas, strengthen my skills, and push myself a little 
            further in terms of creativity and problem-solving.
            My approach revolves around clean aesthetics, 
            user-focused functionality, and modern development practices.
          </p>

          <p>
             I enjoy transforming concepts into well-structured interfaces, shaping designs that feel intuitive, and writing code that is organized, scalable, and efficient. Whether it’s crafting layouts, refining interactions, or developing complete solutions, I strive to create work that is both functional and visually engaging.
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="center-content">
        <div className="file-wrapper">

          {/* BACK PANEL */}
          <img 
            src={folderBack} 
            alt="Folder Back" 
            className="folder-back"
            onClick={handleNavigateToIntroduction}
            style={{ cursor: 'pointer' }}
          />

          {/* PROJECT IMAGES (NO DIMENSIONS APPLIED) */}
           <div className="file-projects">
            <img src={portal1} alt="Portal project" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
            <img src={carousal1} alt="Carousal project 1" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
            <img src={agrisense1} alt="Agrisense project" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
            <img src={carousal2} alt="Carousal project 2" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
            <img src={anime1} alt="Anime project" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
            <img src={fooddel1} alt="Food delivery project" onClick={handleNavigateToIntroduction} style={{ cursor: 'pointer' }} />
          </div>

          {/* FRONT PANEL */}
          <img 
            src={folderFront} 
            alt="Folder Front" 
            className="folder-front front-folder-dot"
            onClick={handleNavigateToIntroduction}
            style={{ cursor: 'pointer' }}
          />

        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="side-column right-column">
        <div className="side-text">
          <p>
            Over time, I’ve worked with various tools, technologies, and design techniques that have helped me grow as a creator. I love learning new frameworks, exploring new design patterns, and experimenting with different styles to expand my skillset.
          </p>

          <p>
            From understanding the fundamentals of UI principles to implementing responsive designs and building smooth digital experiences, every step adds value to my journey.
This portfolio reflects my dedication to continuous improvement and my belief that great work comes from curiosity, consistency, and attention to detail.
          </p>

          <p>
            I aim to build experiences that feel simple, meaningful, and enjoyable for users — whether it’s through elegant design, clean code, or thoughtful problem-solving. Thank you for taking the time to explore my work; I hope it inspires you as much as the process of creating it inspires me.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
