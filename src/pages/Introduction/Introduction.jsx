import "./Introduction.css";
import idCardImage from "../../assets/images/idcard.svg";
import checkerStripImage from "../../assets/images/checker-strip.svg";

function Introduction() {
  return (
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
        </div>
      </div>

      {/* Bottom checker strip placeholder */}
      <div className="checker-strip">
        <img
          src={checkerStripImage}
          alt="Checker strip"
        />
      </div>
    </section>
  );
}

export default Introduction;
