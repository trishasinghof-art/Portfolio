import React, { useState, useRef } from "react";
import "./About.css";

import red from "../../assets/AboutMeFiles/red.svg";
import purple from "../../assets/AboutMeFiles/purple.svg";
import blue from "../../assets/AboutMeFiles/blue.svg";
import brown from "../../assets/AboutMeFiles/brown.svg";
import lavender from "../../assets/AboutMeFiles/lavender.svg";

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

            {/* ===== EDUCATION CONTENT ===== */}
            {index === 0 && activeIndex === 0 && (
              <div className="education-content">
                <div className="education-body">
                  {/* LEFT TIMELINE */}
                  <div className="timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-progress"></div>

                    <div className="timeline-dot dot-top"></div>
                    <div className="timeline-dot dot-bottom"></div>

                    <div className="nib nib-top">✒</div>
                    <div className="nib nib-bottom">✒</div>
                  </div>

                  {/* RIGHT CONTENT */}
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

            {/* ABOUT ME overlay (unchanged) */}
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