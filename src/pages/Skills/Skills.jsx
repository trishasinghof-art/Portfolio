import "./Skills.css";
import Background from "../../assets/images/skillsBG.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import github from "../../assets/icons/github.svg";
import ps from "../../assets/icons/photoshop.svg";
import ai from "../../assets/icons/illustrator.svg";
import figma from "../../assets/icons/figma.svg";
// import notion from "../../assets/icons/notion.svg";
import vercel from "../../assets/icons/vercel.svg";
import canva from "../../assets/icons/canva.svg";
import firebase from "../../assets/icons/firebase.svg";
import tailwind from "../../assets/icons/tailwindcss.svg";


function Skills() {
  return (
    <section className="skills-section">
      {/* Background placeholder */}
      <img
        src={Background}
        alt="Skills Background"
        className="skills-bg"
      />

      <div className="skills-wrapper">
        {/* Frontend Skills */}
        <div className="skills-container">
          <h3 className="skills-title">Crafting Web</h3>
          <div className="skills-card">
            <div className="skills-icons">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={github} alt="GitHub" />
              <img src={vercel} alt="Vercel" />
              <img src={firebase} alt="Firebase" />
              <img src={tailwind} alt="Tailwind CSS" />
            </div>
          </div>
        </div>

        {/* Design Skills */}
        <div className="skills-container">
          <h3 className="skills-title">Crafting Experiences</h3>
          <div className="skills-card">
            <div className="skills-icons">
              <img src={ps} alt="Photoshop" />
              <img src={ai} alt="Illustrator" />
              <img src={figma} alt="Figma" />
              <img src={canva} alt="Canva" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
