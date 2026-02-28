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

/* ===== Soft Skills Pages ===== */
import page1 from "../../assets/SoftSkills/page_1.png";
import page2 from "../../assets/SoftSkills/page_2.png";
import page3 from "../../assets/SoftSkills/page_3.png";
import page35 from "../../assets/SoftSkills/page_3.5.png";
import page4 from "../../assets/SoftSkills/page_4.png";
import page5 from "../../assets/SoftSkills/page_5.png";
import page6 from "../../assets/SoftSkills/page_6.png";
import page7 from "../../assets/SoftSkills/page_7.png";
import page8 from "../../assets/SoftSkills/page_8.png";

const FILES = [
  { id: 0, label: "Education", img: red },
  { id: 1, label: "Soft Skills", img: lavender },
  { id: 2, label: "Projects", img: blue },
  { id: 3, label: "Let's Connect", img: brown },
  { id: 4, label: "About Me", img: purple, center: true },
];

/* Soft Skills Pages Array */
const SOFT_PAGE_COVER = page1;
const SOFT_SPREADS = [
  { left: page2, right: page3 },
  { left: page35, right: page4 },
  { left: page5, right: page6 },
  { left: page7, right: page8 },
];

function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [offsets, setOffsets] = useState(() => new Array(FILES.length).fill(0));
  const [spreadIndex, setSpreadIndex] = useState(0);
  const itemRefs = useRef([]);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setOffsets(new Array(FILES.length).fill(0));
      setActiveIndex(null);
      setSpreadIndex(0);
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
    if (index !== 1) setSpreadIndex(0);
  };

  /* Soft Skills Book Navigation */
  const nextSpread = (e) => {
    e.stopPropagation();
    if (spreadIndex === SOFT_SPREADS.length) {
      setSpreadIndex(0);
    } else {
      setSpreadIndex((p) => p + 1);
    }
  };

  const prevSpread = (e) => {
    e.stopPropagation();
    setSpreadIndex((p) => Math.max(0, p - 1));
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

    {/* ===== SOFT SKILLS TAG (ALWAYS VISIBLE) ===== */}
    {index === 1 && (
      <div className="soft-skills-tag">SOFT SKILLS</div>
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

    {/* ===== SOFT SKILLS CONTENT ===== */}
    {index === 1 && activeIndex === 1 && (
      <div className="soft-content">
        <div className="soft-page-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Arrow slot left */}
          <div className="soft-arrow-wrapper left">
            {spreadIndex > 0 ? (
              <button className="soft-arrow left" onClick={prevSpread}>
                ←
              </button>
            ) : (
              <button className="soft-arrow left" style={{ visibility: 'hidden' }} tabIndex={-1} aria-hidden="true" />
            )}
          </div>

          {/* Magazine content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {spreadIndex === 0 && (
              <div className="soft-cover-display">
                <img
                  src={SOFT_PAGE_COVER}
                  className="soft-page"
                  alt="Soft skills cover"
                />
              </div>
            )}
            {spreadIndex > 0 && (
              <div className="soft-spread-display" style={spreadIndex === 2 ? {position: 'relative'} : {}}>
                <img
                  src={SOFT_SPREADS[spreadIndex - 1].left}
                  className="soft-page soft-page-left"
                  alt={`Soft skills page ${spreadIndex * 2}`}
                />
                <img
                  src={SOFT_SPREADS[spreadIndex - 1].right}
                  className="soft-page soft-page-right"
                  alt={`Soft skills page ${spreadIndex * 2 + 1}`}
                />
                {/* Competitive Profiles Overlay: Only on Page 35 */}
                {spreadIndex === 2 && (
                  <div className="cp-links-overlay">
                    <a
                      href="https://leetcode.com/u/trishassingh03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link"
                    >
                      &nbsp;&nbsp;&nbsp;LeetCode - trishassingh03
                    </a>
                    <a
                      href="https://www.codechef.com/users/fever_hill_23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link"
                    >
                      CodeChef - fever_hill_23
                    </a>
                    <a
                      href="https://codeforces.com/profile/trishasinghof"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link"
                    >
                      &nbsp;&nbsp;&nbsp;Codeforces - trishasinghof
                    </a>
                    
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Arrow slot right */}
          <div className="soft-arrow-wrapper right">
            {spreadIndex < SOFT_SPREADS.length ? (
              <button className="soft-arrow right" onClick={nextSpread}>
                →
              </button>
            ) : (
              <button className="soft-arrow right" style={{ visibility: 'hidden' }} tabIndex={-1} aria-hidden="true" />
            )}
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
