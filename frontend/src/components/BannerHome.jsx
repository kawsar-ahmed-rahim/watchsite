import { bannerHomeStyles as a } from "../assets/dummyStyles";
import Navbar from "./Navbar";
import video from "../assets/bannervideo.mp4";
import { useEffect, useRef } from "react";
import BL1 from "../assets/BL1.png";
import BM1 from "../assets/BM1.png";
import BR1 from "../assets/BR1.png";
const BannerHome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("autoplay");
    }
  }, []);
  return (
    <div className={a.container}>
      <div className={a.navbarWrapper}>
        <Navbar />
      </div>
      {/* bg video */}
      <div className={a.videoContainer}>
        <video
          className={a.video}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fallback.jpg"
          role="presentation"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      // content
      <div className={a.contentContainer}>
        <div className={a.h1Container}>
          <h1 style={a.playfairFont} className={a.h1Text}>
            <span className={a.h1SpanGray}>Love you more</span>
            <span className={a.h1SpanYellow}>with each tick-tock</span>
          </h1>
          <p className={a.subtext}>
            Discover our exclusive collection of handcrafted timepieces that
            embody precision, luxury and timeless style.
          </p>
        </div>
        {/* cards sections */}
        <div className={a.cardsContainer}>
          <div className={a.grid}>
            <div className={`${a.cardWrapper} ${a.leftCardTransform}`}>
              <div className={`${a.cardBase} ${a.cardPadding}`}>
                <img
                  src={BL1}
                  alt="left logo"
                  className={`${a.cardImage} ${a.leftCardImage}`}
                  loading="lazy"
                />
              </div>
              <p className={`${a.cardLabel} ${a.cardLabelGray}`}>
                Classic Heritage
              </p>
            </div>

            <div className={`${a.cardWrapper} ${a.middleCardTransform}`}>
              <div className={`${a.cardMiddle} ${a.cardPadding}`}>
                <img
                  src={BM1}
                  alt="middle logo"
                  className={`${a.cardImage} ${a.middleCardImage}`}
                  loading="lazy"
                />
              </div>
              <p className={`${a.cardLabel} ${a.cardLabelYellow}`}>
                Limited Edition
              </p>
            </div>

            <div className={`${a.cardWrapper} ${a.rightCardTransform}`}>
              <div className={`${a.cardBase} ${a.cardPadding}`}>
                <img
                  src={BR1}
                  alt="right logo"
                  className={`${a.cardImage} ${a.rightCardImage}`}
                  loading="lazy"
                />
              </div>
              <p className={`${a.cardLabel} ${a.cardLabelGray}`}>
                Modern Precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
