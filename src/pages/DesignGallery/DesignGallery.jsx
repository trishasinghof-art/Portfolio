import React from "react";
import "./DesignGallery.css";
import Bg from "../../assets/gallery/designGalleryBG.svg";
import foodDelivery from "../../assets/gallery/food delivery.svg";
import carouselPost from "../../assets/gallery/carousalpost.svg";
import portal from "../../assets/gallery/portal.svg";
import agrisense from "../../assets/gallery/Agrisense.svg";
import anime from "../../assets/gallery/anime.svg";
import "@fontsource/kapakana"; // default weights

function DesignGallery() {
  return (
    <section className="design-gallery-section">
      {/* Background */}
      <img
        src={Bg}
        alt="Design Gallery Background"
        className="design-gallery-bg"
      />

      {/* Heading */}
      <h1 className="design-gallery-heading">
        Design Gallery
      </h1>

      {/* ===== Pillars Container ===== */}
      <div className="design-gallery-pillars">
        <div className="pillar pillar-orange">
          <img src={foodDelivery} alt="Design 1 - Food Delivery" />
        </div>
        <div className="pillar pillar-pink">
          <img src={carouselPost} alt="Design 2 - Carousel Post" />
        </div>
        <div className="pillar pillar-purple">
          <img src={portal} alt="Design 3 - Portal" />
        </div>
        <div className="pillar pillar-green">
          <img src={agrisense} alt="Design 4 - Agrisense" />
        </div>
        <div className="pillar pillar-red">
          <img src={anime} alt="Design 5 - Anime" />
        </div>
      </div>
    </section>
  );
}

export default DesignGallery;
