import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import emailjs from "@emailjs/browser";
import "./interact.css";

// Import local template images properly
import bg1 from "../../assets/templates/bg1.jpg";
import bg2 from "../../assets/templates/bg2.jpg";
import bg3 from "../../assets/templates/bg3.jpg";
import bg4 from "../../assets/templates/bg4.jpg";
import bg5 from "../../assets/templates/bg5.jpg";
import bg6 from "../../assets/templates/bg6.jpg";
import bg7 from "../../assets/templates/bg7.jpg";
import bg8 from "../../assets/templates/bg8.jpg";
import bg9 from "../../assets/templates/bg9.jpg";
import bg10 from "../../assets/templates/bg10.jpg";
import bg11 from "../../assets/templates/bg11.jpg";
import bg12 from "../../assets/templates/bg12.jpg";
import bg13 from "../../assets/templates/bg13.jpg";
import bg14 from "../../assets/templates/bg14.jpg";
import bg15 from "../../assets/templates/bg15.jpg";
import bg16 from "../../assets/templates/bg16.jpg";
import bg17 from "../../assets/templates/bg17.jpg";
import bg18 from "../../assets/templates/bg18.jpg";
import bg19 from "../../assets/templates/bg19.jpg";
import bg20 from "../../assets/templates/bg20.jpg";

const quotes = [
  "You are doing better than you think ✨",
  "Good things are quietly coming your way 🌸",
  "Today looks lucky for you 🍀",
  "Be gentle with yourself today 🤍",
  "A beautiful surprise is near 💫",
  "Trust the timing of your life ⏳",
  "Something wonderful is about to happen 🌟",
  "Stay soft, stay strong 🌷",
  "Your energy is magnetic today ⚡",
  "Breathe… you’ve got this 🌿",
  "A little kindness today 🌸 can bloom into magic tomorrow ✨",
  "Whisper to yourself: You’ve got this 🌿",
  "Stars shine brightest after the darkest nights 🌌",
  "Every small step counts 🐾 Keep going",
  "Happiness hides in little things 🌼 Open your eyes",
  "Write your own story 📖, make it legendary",
  "Soft hearts create strong worlds 💛",
  "Breathe deeply, the universe listens 🌬️",
  "Courage is quiet 🌙 but fierce",
  "Chase wonder, not perfection 🌟",
  "Today might bring a delightful surprise 🎁",
  "Someone will smile at you unexpectedly 😊",
  "Luck is on your side — keep an open heart 🍀",
  "An old friend may reach out 📬",
  "A new idea will spark your creativity 💡",
  "Expect magic in small gestures ✨",
  "Your energy will attract joy today 🌈",
  "Something unexpected will make you laugh 😂",
  "Your path may twist, but it leads to beauty 🌿",
  "Adventure is closer than you think 🗺️",
  "Even the smallest candle 🌙 can banish the darkest night",
  "Let your soul dance in the rain 🌧️ and sing",
  "Whispers of fate are woven in your laughter 🎶",
  "Time flows like a river 🏞️; paddle with joy",
  "The wind carries secrets only hearts can hear 🍃"
];

const templates = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10,
  bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20
];

function Interact() {
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState("");
  const [selectedBg, setSelectedBg] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const boardRef = useRef(null);

  // Step 1 — Shuffle quote
  const handleShuffle = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    setStep(2);
  };

  // Step 2 — open template panel
  const handleSelectTemplate = () => setShowTemplates(true);

  // Choose template
  const chooseTemplate = (bg) => {
    setSelectedBg(bg);
    setStep(3);
  };

  // Step 3 — show modal
  const handleNext = () => setShowModal(true);

  // Download the canvas
  const handleDownload = async () => {
    const canvas = await html2canvas(boardRef.current);
    const link = document.createElement("a");
    link.download = "spark-message.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  // Send to Loved One using EmailJS
  const handleSend = async () => {
  const recipient = prompt("Enter your loved one's email:");
  if (!recipient) return alert("Email is required!");
  if (!quote) return alert("Please generate a quote first!");

  let attachment = "";
  if (boardRef.current) {
    const canvas = await html2canvas(boardRef.current);
    attachment = canvas.toDataURL("image/png");
  }

  const templateParams = {
  to_email: recipient,
  name: "Spark & Share",
  time: new Date().toLocaleString(),
  message: quote,
  email: recipient,
};
  emailjs
    .send(
      "service_toy8ehe",
      "template_evhhhew",
      templateParams,
      "0mw1I9T2IxVM2uQhl"
    )
    .then(
      () => alert("Your spark has been sent! ✨"),
      (error) => {
        console.error("Email send error:", error);
        alert("Failed to send email. Please try again.");
      }
    );
};

  const getButtonText = () => {
    if (step === 1) return "Shuffle & Choose";
    if (step === 2) return "Select Template";
    return "Next";
  };

  const handleMainButton = () => {
    if (step === 1) handleShuffle();
    else if (step === 2) handleSelectTemplate();
    else handleNext();
  };

  return (
    <section className="spark-section">
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <h2 className="spark-title">Spark & Share ✨</h2>
      <p className="spark-subtitle">Take a little positivity with you 💫</p>

      <div className="spark-container">
        {/* LEFT PANEL — Steps */}
        <div className="spark-steps">
          <h3>How it works</h3>
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <h4>Step 1: Generate your message</h4>
            <p>
              Click "Shuffle & Choose" to get a daily motivational or
              predictive message. Let a little spark brighten your day!
            </p>
          </div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <h4>Step 2: Pick your vibe</h4>
            <p>
              Select a background that matches your mood. Our curated
              templates are designed to feel magical and uplifting.
            </p>
          </div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>
            <h4>Step 3: Share the joy</h4>
            <p>
              Download your creation or send it to a loved one to
              spread happiness and positivity.
            </p>
          </div>
        </div>

        {/* CENTER PANEL — Whiteboard */}
        <div className="spark-center">
          <div
            ref={boardRef}
            className="spark-board"
            style={{
              backgroundImage: selectedBg ? `url(${selectedBg})` : "none",
            }}
          >
            <div className="spark-overlay">
              {quote || "Your daily spark will appear here ✨"}
            </div>
          </div>
          <button className="spark-btn" onClick={handleMainButton}>
            {getButtonText()}
          </button>
        </div>

        {/* RIGHT PANEL — Templates */}
        <div className={`spark-templates ${showTemplates ? "show" : ""}`}>
          <h3>Choose a vibe</h3>
          <div className="template-grid">
            {templates.map((bg, i) => (
              <img
                key={i}
                src={bg}
                alt={`template-${i + 1}`}
                onClick={() => chooseTemplate(bg)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="spark-modal">
          <div className="spark-modal-content">
            <h3>Your spark is ready ✨</h3>
            <div className="modal-buttons">
              <button onClick={handleDownload}>⬇ Download</button>
              <button onClick={handleSend}>💌 Send to Loved One</button>
            </div>
            <p className="cc-note">
              💛 Loved this? CC me too at <span>trishasinghof@email.com</span>
            </p>
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Interact;