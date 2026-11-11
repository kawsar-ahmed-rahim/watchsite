import { footerStyles as a } from "../assets/dummyStyles";
import {
  ChevronRight,
  Clock,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className={a.footer}>
      <div className={a.topBorder}></div>

      {/* Pattern overlay */}
      <div className={a.patternOverlay}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="watchPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#watchPattern)"
          />
        </svg>
      </div>
      <div className={a.mainContainer}>
        <div className={a.newsletterSection}>
          <div className={a.newsletterContent}>
            <h3 className={a.newsletterTitle}>Timeless Elegance, Delivered</h3>
            <p className={a.newsletterText}>
              Subscribe to our newsletter for the latest updates and offers.
            </p>

            <div className={a.formContainer}>
              <input
                type="email"
                className={a.emailInput}
                placeholder="Enter your email"
              />
              <button className={a.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* main footer */}
        <div className={a.mainGrid}>
          <div className={a.brandSection}>
            <div className={a.brandContainer}>
              <div className={a.brandIconContainer}>
                <div className={a.brandIconPing}>
                  <Clock className={a.brandIcon} />
                </div>
                <span className={a.brandName}>ChronoElite</span>
              </div>
              <p className={a.brandDescription}>
                Crafting timeless pieces for the discerning individual; where
                precision meets elegance in every detail.
              </p>

              <div className={a.socialIconsContainer}>
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a href="#" key={index} className={a.socialIcon}>
                    <Icon className={a.socialIconInner} />
                  </a>
                ))}
              </div>
            </div>

            {/* quick links */}

            <div>
              <h3 className={a.sectionHeading}>
                <ChevronRight className={a.sectionIcon} />
                Explore
              </h3>

              <ul className={a.linksList}>
                {[
                  { label: "Collections", href: "/watches" },
                  { label: "New Arrivals", href: "/watches" },
                  { label: "Best Sellers", href: "/watches" },
                  { label: "Limited Editions", href: "/watches" },
                  { label: "Our Story", href: "/watches" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={a.linkItem}>
                      <ChevronRight className={a.linkIcon} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* customer service */}

          <div>
            <h3 className={a.sectionHeading}>
              <ChevronRight className={a.sectionIcon} />
              Support
            </h3>
            <ul className={a.linksList}>
              {[
                "Contact Us",
                "Shipping & Returns",
                "Product Care",
                "Warranty",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className={a.supportLink}>
                    <ChevronRight className={a.linkIcon} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className={a.sectionHeading}>
              <ChevronRight className={a.sectionIcon} />
              Connect
            </h3>
            <ul className={a.contactList}>
              <li className={a.contactItem}>
                <div className={a.contactIconContainer}>
                  <MapPin className={a.contactIcon} />
                </div>
                <span className={a.contactText}>
                  123 Luxury Avenue, Geneva, Switzerland
                </span>
              </li>
              <li className={a.contactItem}>
                <div className={a.contactIconContainer}>
                  <Phone className={a.contactIcon} />
                </div>
                <span className={a.contactText}>+41 22 345 6789</span>
              </li>
              <li className={a.contactItem}>
                <div className={a.contactIconContainer}>
                  <Mail className={a.contactIcon} />
                </div>
                <span className={a.contactText}>info@chronoelite.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom lines */}
        <div className={a.bottomSection}>
          <p className={a.copyright}>
            &copy; {new Date().getFullYear()} ChronoElite. Crafted with{" "}
            <Heart className={a.heartIcon} /> in bangladesh
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <p className={a.designerLink}>
              Designed by{" "}
              <a
                href="https://spectacular-macaron-597a89.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={a.linkHover}
              >
                RAHIM KAWSAR
              </a>
            </p>
          </div>
        </div>
      </div>
      <style>{a.mediaQueries}</style>
    </footer>
  );
};

export default Footer;
