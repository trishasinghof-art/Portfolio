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
    // Toggle behavior: clicking same index resets offsets
    if (activeIndex === index) {
      setOffsets(new Array(FILES.length).fill(0));
      setActiveIndex(null);
      return;
    }

    // Collect overlapping indices (those above the clicked file)
    const overlapping = [];
    for (let i = index + 1; i < FILES.length; i++) overlapping.push(i);

    // If nothing overlaps, reset offsets and set active
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

    // Compute shift so bottom of clicked aligns with top of topmost overlapping
    const shift = clickedRect.bottom - topmostRect.top;

    const REDUCTION = 75; // pixels to reduce for the topmost overlapping file

    const newOffsets = new Array(FILES.length).fill(0);
    const topmostIndex = overlapping[overlapping.length - 1];
    for (let i = index + 1; i < FILES.length; i++) {
      if (i === topmostIndex) {
        // reduce the topmost file's downward displacement to avoid excess white space
        newOffsets[i] = Math.max(0, shift - REDUCTION);
      } else {
        newOffsets[i] = shift;
      }
    }

    setOffsets(newOffsets);
    setActiveIndex(index);
  };

  return (
    <section className="about-me-section">
      <div className="files-container">
        {FILES.map((file, index) => {
          return (
            <div
              key={file.id}
              className={`file-item`}
              onClick={() => handleClick(index)}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{
                transform: `translateX(-50%) translateY(${offsets[index] || 0}px)`,
              }}
            >
              <img src={file.img} alt={file.label} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
