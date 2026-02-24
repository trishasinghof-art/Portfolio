import React, { useState, useRef } from "react";
import "./About.css";

import red from "../../assets/AboutMeFiles/red.svg";
import purple from "../../assets/AboutMeFiles/purple.svg";
import blue from "../../assets/AboutMeFiles/blue.svg";
import brown from "../../assets/AboutMeFiles/brown.svg";
import lavender from "../../assets/AboutMeFiles/lavender.svg";

import mailIcon from "../../assets/icons/mail.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkdin.svg";
import behanceIcon from "../../assets/icons/behance.svg";

const FILES = [
  { id: 0, label: "Education", img: red },
  { id: 1, label: "Soft Skills", img: lavender },
  { id: 2, label: "Projects", img: blue },
  { id: 3, label: "Let's Connect", img: brown },
  { id: 4, label: "About Me", img: purple, center: true },
];

function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [offsets, setOffsets] = useState(() => new Array(FILES.length).fill(0));
  const itemRefs = useRef([]);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setOffsets(new Array(FILES.length).fill(0));
      setActiveIndex(null);
      return;
    }

    const overlapping = [];
    for (let i = index + 1; i < FILES.length; i++) overlapping.push(i);

    if (overlapping.length === 0) {
      setOffsets(new Array(FILES.length).fill(0));
      setActiveIndex(index);
      return;
    }

    const clickedEl = itemRefs.current[index];
    const topmostEl = itemRefs.current[overlapping[overlapping.length - 1]];
    if (!clickedEl || !topmostEl) return;

    const clickedRect = clickedEl.getBoundingClientRect();
    const topmostRect = topmostEl.getBoundingClientRect();

    const shift = clickedRect.bottom - topmostRect.top;
    const REDUCTION = 75;

    const newOffsets = new Array(FILES.length).fill(0);
    const topmostIndex = overlapping[overlapping.length - 1];

    for (let i = index + 1; i < FILES.length; i++) {
      newOffsets[i] = i === topmostIndex ? Math.max(0, shift - REDUCTION) : shift;
    }

    setOffsets(newOffsets);
    setActiveIndex(index);
  };

  return (
    <section className="about-me-section">
      <div className="files-container">
        {FILES.map((file, index) => (
          
  <div
    key={file.id}
    className="file-item"
    onClick={() => handleClick(index)}
    ref={(el) => (itemRefs.current[index] = el)}
    style={{
      transform: `translateX(-50%) translateY(${offsets[index] || 0}px)`,
    }}
  >
    <img src={file.img} alt={file.label} />

    {/* ===== EDUCATION TAG (ALWAYS VISIBLE) ===== */}
    {index === 0 && (
      <div className="education-tag">EDUCATION</div>
    )}

    {/* ===== LET'S CONNECT TAG (ALWAYS VISIBLE) ===== */}
    {index === 3 && (
      <div className="connect-tag">LET'S CONNECT</div>
    )}

    {/* ===== EDUCATION CONTENT ===== */}
    {index === 0 && activeIndex === 0 && (
      <div className="education-content">
        <div className="education-body">
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-progress"></div>
            <div className="timeline-dot dot-top"></div>
            <div className="timeline-dot dot-bottom"></div>
            <div className="nib nib-top">✒</div>
            <div className="nib nib-bottom">✒</div>
          </div>

          <div className="education-text">
            <div className="edu-block">
              <div className="edu-year">2024 - 2028</div>
              <div className="edu-desc">
                The Ajay Kumar Garg Engineering College,
                <br />
                Ghaziabad, Uttar Pradesh
              </div>
              <div className="edu-pill">
                Computer Science & Engineering
              </div>
            </div>

            <div className="edu-block">
              <div className="edu-year">2015 - 2023</div>
              <div className="edu-desc">
                Seth M.R. Jaipuria School,
                <br />
                Vineet Khand, Gomti Nagar, Lucknow
              </div>
              <div className="edu-pill">Schooling</div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* ===== LET'S CONNECT CONTENT ===== */}
    {index === 3 && activeIndex === 3 && (
      <div className="connect-content">
        <div className="connect-left">
          <h2 className="connect-heading">
            Let’s chat.<br />
            Tell me about<br />
            your project.
          </h2>

          <p className="connect-sub">
            Let’s create something together.
          </p>

          <button className="start-project-btn">
            <span className="start-project-text">Submit</span>
          </button>
        </div>

        <div className="connect-form-stack">
          <div className="connect-form-card" onClick={(e) => e.stopPropagation()}>
            <input placeholder="First name" />
            <input placeholder="Last name" />
            <input placeholder="Email Address" />
            <textarea placeholder="Send a message"></textarea>
            {/* <button className="connect-send-btn">Send</button> */}
          </div>
        </div>
      </div>
    )}
    {/* ===== CONTACT ME TAG (ALWAYS VISIBLE) ===== */}
{index === 2 && (
  <div className="contact-tag">CONTACT ME</div>
)}

{/* ===== CONTACT ME CONTENT ===== */}
{index === 2 && activeIndex === 2 && (
  <div className="contact-content">
    <div className="contact-grid">
      
      <a
        href="mailto:trishasinghof@gmail.com"
        className="contact-card gmail"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-icon">
          <img src={mailIcon} alt="Mail" />
        </div>
        <div className="contact-divider"></div>
        <div className="contact-link">trishasinghof@gmail.com</div>
      </a>

      <a
        href="https://github.com/trishasinghof-art"
        target="_blank"
        rel="noreferrer"
        className="contact-card github"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-icon">
          <img src={githubIcon} alt="GitHub" />
        </div>
        <div className="contact-divider"></div>
        <div className="contact-link">github.com/trishasinghof-art</div>
      </a>

      <a
        href="https://www.linkedin.com/in/trisha-singh-431185371/"
        target="_blank"
        rel="noreferrer"
        className="contact-card linkedin"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
        <div className="contact-divider"></div>
        <div className="contact-link">
          linkedin.com/in/trisha-singh
        </div>
      </a>

      <a
        href="https://behance.net/yourusername"
        target="_blank"
        rel="noreferrer"
        className="contact-card behance"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-icon">
          <img src={behanceIcon} alt="Behance" />
        </div>
        <div className="contact-divider"></div>
        <div className="contact-link">behance.net/yourusername</div>
      </a>

    </div>
  </div>
)}

    {/* ABOUT ME overlay */}
    {index === 4 && (
      <div className="overlay-text">
        <div className="overlay-small">Know More</div>
        <div className="overlay-large">About Me</div>
      </div>
    )}
  </div>
))}
      </div>
    </section>
  );
}

export default About;
