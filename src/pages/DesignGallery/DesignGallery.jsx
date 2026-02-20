import React from "react";
import "./DesignGallery.css";
import Bg from "../../assets/gallery/designGalleryBG.svg";
import foodDelivery from "../../assets/gallery/food delivery.svg";
import carouselPost from "../../assets/gallery/carousalpost.svg";
import portal from "../../assets/gallery/portal.svg";
import agrisense from "../../assets/gallery/Agrisense.svg";
import anime from "../../assets/gallery/anime.svg";

// TAGS
import foodTag from "../../assets/gallery/fooddelivery_tag.svg";
import carouselTag from "../../assets/gallery/carousalpost_tag.svg";
import portalTag from "../../assets/gallery/portal_tag.svg";
import agrisenseTag from "../../assets/gallery/agrisense_tag.svg";
import animeTag from "../../assets/gallery/anime_tag.svg";

import "@fontsource/kapakana";

function DesignGallery() {
  return (
    <section className="design-gallery-section">
      <img
        src={Bg}
        alt="Design Gallery Background"
        className="design-gallery-bg"
      />

      <h1 className="design-gallery-heading">Design Gallery</h1>

      <div className="design-gallery-pillars">

        <div className="pillar pillar-orange">
          <div className="pillar-inner">
            <img src={foodDelivery} alt="Food Delivery" />
          </div>
          <div className="pillar-tag">
            <img src={foodTag} alt="" className="tag-base" />
            <p className="tag-text">
              A user-friendly food delivery app UI<br /> created for campus students,
              using <br />design system principles to keep the <br />interface simple,
              consistent,<br /> and intuitive.
            </p>
          </div>
        </div>

        <div className="pillar pillar-pink">
          <div className="pillar-inner">
            <img src={carouselPost} alt="Carousel Post" />
          </div>
          <div className="pillar-tag">
            <img src={carouselTag} alt="" className="tag-base" />
            <p className="tag-text">
              A carousel post showcasing how consistent components, grids,
              and style guides come together to form a strong design system.
            </p>
          </div>
        </div>

        <div className="pillar pillar-purple">
          <div className="pillar-inner">
            <img src={portal} alt="Portal" />
          </div>
          <div className="pillar-tag">
            <img src={portalTag} alt="" className="tag-base" />
            <p className="tag-text">
              &nbsp;&nbsp;&nbsp;&nbsp;A modern and user-friendly registration &nbsp;&nbsp;&nbsp; portal landing page
              designed to simplify onboarding and make account creation effortless.
            </p>
          </div>
        </div>

        <div className="pillar pillar-green">
          <div className="pillar-inner">
            <img src={agrisense} alt="Agrisense" />
          </div>
          <div className="pillar-tag">
            <img src={agrisenseTag} alt="" className="tag-base" />
            <p className="tag-text">
              &nbsp;&nbsp;A farmer-friendly agriculture app <br />&nbsp;&nbsp;&nbsp;powered by AI to simplify crop<br />
              monitoring, improve yields, and <br />provide practical, <br />modern farming assistance.
            </p>
          </div>
        </div>

        <div className="pillar pillar-red">
          <div className="pillar-inner">
            <img src={anime} alt="Anime" />
          </div>
          <div className="pillar-tag">
            <img src={animeTag} alt="" className="tag-base" />
            <p className="tag-text">
              From crisp vector illustrations,<br /> and anime-style artwork to
              high-impact <br />movie posters, I craft bold and immersive <br />visuals that
              bring ideas to life.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DesignGallery;