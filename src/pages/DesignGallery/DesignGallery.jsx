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

// Link Icon Component (inline SVG for color control)
const LinkIcon = ({ className }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 51 51" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M21.7257 42.0336L17.9645 45.6886C16.9782 46.6748 15.6405 47.2289 14.2457 47.2289C12.8509 47.2289 11.5132 46.6748 10.527 45.6886C9.5407 44.7023 8.98662 43.3646 8.98662 41.9698C8.98662 40.575 9.5407 39.2373 10.527 38.2511L20.1745 28.5823C21.1214 27.6323 22.3973 27.0827 23.7381 27.0471C25.079 27.0115 26.3822 27.4927 27.3782 28.3911L27.6332 28.6036C28.0362 28.9981 28.5794 29.2164 29.1433 29.2104C29.7072 29.2044 30.2456 28.9747 30.6401 28.5717C31.0346 28.1687 31.2529 27.6256 31.2469 27.0617C31.2409 26.4978 31.0112 25.9593 30.6082 25.5648C30.4877 25.4103 30.36 25.2614 30.2257 25.1186C28.4117 23.5404 26.0657 22.7106 23.6628 22.7974C21.2599 22.8842 18.9799 23.8811 17.2845 25.5861L7.50948 35.2548C5.84848 37.0628 4.95017 39.4425 5.00214 41.897C5.0541 44.3516 6.05232 46.6912 7.78835 48.4272C9.52437 50.1632 11.8639 51.1614 14.3185 51.2134C16.7731 51.2654 19.1528 50.3671 20.9607 48.7061L24.637 45.1148C25 44.7188 25.1995 44.2001 25.1954 43.6629C25.1914 43.1257 24.984 42.61 24.6151 42.2195C24.2462 41.8291 23.7431 41.5928 23.207 41.5583C22.6709 41.5238 22.1417 41.6936 21.7257 42.0336ZM44.442 11.7736C42.6544 9.99709 40.2365 9 37.7163 9C35.1962 9 32.7783 9.99709 30.9907 11.7736L27.3145 15.3648C26.9515 15.7608 26.752 16.2796 26.756 16.8168C26.7601 17.3539 26.9674 17.8696 27.3363 18.2601C27.7053 18.6506 28.2084 18.8868 28.7445 18.9213C29.2805 18.9558 29.8098 18.786 30.2257 18.4461L33.902 14.7911C34.8882 13.8048 36.2259 13.2507 37.6207 13.2507C39.0155 13.2507 40.3532 13.8048 41.3395 14.7911C42.3257 15.7773 42.8798 17.115 42.8798 18.5098C42.8798 19.9046 42.3257 21.2423 41.3395 22.2286L31.692 31.8973C30.745 32.8473 29.4692 33.397 28.1283 33.4326C26.7875 33.4682 25.4842 32.987 24.4882 32.0886L24.2332 31.8761C23.8303 31.4816 23.2871 31.2633 22.7232 31.2693C22.1593 31.2752 21.6209 31.505 21.2264 31.9079C20.8318 32.3109 20.6136 32.8541 20.6195 33.418C20.6255 33.9819 20.8553 34.5203 21.2582 34.9148C21.4133 35.0719 21.5764 35.2209 21.747 35.3611C23.5632 36.9345 25.9082 37.7612 28.3096 37.6744C30.711 37.5877 32.9903 36.594 34.6882 34.8936L44.357 25.2248C46.1448 23.4485 47.1572 21.0369 47.1731 18.5167C47.189 15.9965 46.2072 13.5724 44.442 11.7736Z" 
      fill="currentColor"
    />
  </svg>
);

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
              <a href="https://www.figma.com/design/6Tfil7EqF7KhOsW1OaZmC3/food-delivery-app?node-id=0-1&t=S91TxOpXXBYpcRZ6-1" target="_blank" rel="noopener noreferrer" className="link-wrapper">
                <LinkIcon className="link-icon link-icon--orange" />
              </a>
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
              <a href="https://www.figma.com/design/090tUJl0GptIDIKYTotrXH/carousel-post--Design-System-?t=S91TxOpXXBYpcRZ6-1" target="_blank" rel="noopener noreferrer" className="link-wrapper">
                <LinkIcon className="link-icon link-icon--pink" />
              </a>
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
              <a href="https://www.figma.com/design/zWPxdhiySx1Sa1AgeEKeYF/Portal-Design?t=S91TxOpXXBYpcRZ6-1" target="_blank" rel="noopener noreferrer" className="link-wrapper">
                <LinkIcon className="link-icon link-icon--blue" />
              </a>
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
              <a href="https://www.figma.com/design/EpSrkBGFLatH2cQJubuebc/AgriSense?t=S91TxOpXXBYpcRZ6-0" target="_blank" rel="noopener noreferrer" className="link-wrapper">
                <LinkIcon className="link-icon link-icon--green" />
              </a>
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
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="link-wrapper">
                <LinkIcon className="link-icon link-icon--red" />
              </a> */}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DesignGallery;