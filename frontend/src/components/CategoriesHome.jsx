import { categoriesHomeStyles as a } from "../assets/dummyStyles";
import brands from "../assets/CategoriesHomedata";
import { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesHome = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  return (
    <section className={a.section}>
      <div className={a.container}>
        <header className={a.header} style={a.playfairFont}>
          <h1 className={a.h1} style={a.h1FontSize}>
            <span className={a.h1SpanRegular}>Premium Watch</span>
            <span className={a.h1SpanAccent}>Brands</span>
          </h1>
          <div className={a.underline}></div>
          <p className={a.subtext}>
            Discover the world's most prestigious watchmakers - curated picks
            for every style.
          </p>
        </header>

        {/* grid */}
        <div className={a.grid} style={a.playfairFont}>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.link}
              className={a.cardLink}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div className={a.cardWrapper}>
                <div className={a.imageContainer}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className={a.image}
                    loading="lazy"
                  />
                </div>

                <div className={a.cardContent}>
                  <h3
                    className={`${a.cardTitleBase} ${hoveredBrand === brand.id ? a.cardTitleHover : a.cardTitleNormal}`}
                  >
                    {brand.name}
                  </h3>
                  {brand.tagline ? (
                    <p className={a.cardTagline}>{brand.tagline}</p>
                  ) : null}
                </div>
                <span className={a.focusRing}></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{a.styleSting}</style>
    </section>
  );
};

export default CategoriesHome;
