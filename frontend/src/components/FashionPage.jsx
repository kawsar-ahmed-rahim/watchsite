import { watchOfferBannerStyles as a } from "../assets/dummyStyles";
import F1 from "../assets/F1.png";
import { Heart, Shield, Truck } from "lucide-react";
import { useState, useEffect } from "react";
const FashionPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    Days: 2,
    Hours: 12,
    Minutes: 45,
    Seconds: 18,
  });

  useEffect(() => {
    // Convert current state to total seconds helper
    const toTotalSeconds = (t) =>
      t.Days * 86400 + t.Hours * 3600 + t.Minutes * 60 + t.Seconds;

    // Create interval
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const total = toTotalSeconds(prev);

        // If already zero, clear and return zeros
        if (total <= 0) {
          clearInterval(timer);
          return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
        }

        const nextTotal = total - 1;

        const Days = Math.floor(nextTotal / 86400);
        const Hours = Math.floor((nextTotal % 86400) / 3600);
        const Minutes = Math.floor((nextTotal % 3600) / 60);
        const Seconds = Math.floor(nextTotal % 60);

        return { Days, Hours, Minutes, Seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={a.container}>
      <div className={a.maxWidthContainer}>
        <div className={a.banner}>
          <div className={a.contentSection}>
            <div className={a.decorativeLarge}></div>
            <div className={a.decorativeSmall}></div>

            <div className={a.offerTag} style={a.playfairFont}>
              Limited Time Offer
            </div>

            <h1 className={a.heading} style={a.playfairFont}>
              Premium <span className={a.headingAccent}>Luxury watches</span>{" "}
              Collection
            </h1>

            <p className={a.description}>
              Discover our exclusive selection of premium timepieces with
              special discounts upto 30% off. Elevate your style with precision
              craftmanship.
            </p>

            <div className={a.countdownGrid}>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div className={a.countdownItem} key={unit}>
                  <div className={a.countdownValue}>
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className={a.countdownLabel}>{unit}</div>
                </div>
              ))}
            </div>

            {/* features */}
            <div className={a.featuresContainer}>
              <div className={a.featureItem}>
                <Truck size={18} className={a.featuresIcon} />
                <span className={a.featureText}>Free Shipping</span>
              </div>

              <div className={a.featureItem}>
                <Shield size={18} className={a.featuresIcon} />
                <span className={a.featureText}>2-years Warranty</span>
              </div>

              <div className={a.featureItem}>
                <Heart size={18} className={a.featuresIcon} />
                <span className={a.featureText}>30-days Returns</span>
              </div>
            </div>
          </div>
          {/* img */}
          <div className={a.imageSection}>
            <div className={a.imageOverlay}>
              <img src={F1} alt="img" className={a.image} />
              <div className={a.priceTag}>
                <div className={a.oldPrice}>$399.33</div>
                <div className={a.newPrice}>$333.25</div>
                <div className={a.discount}>save 30%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionPage;
