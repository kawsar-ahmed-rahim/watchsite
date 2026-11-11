import { footerStyles as a } from "../assets/dummyStyles";
import {
  ChevronRight,
  Clock,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
];

const exploreLinks = [
  { label: "Collections", href: "/watches" },
  { label: "New Arrivals", href: "/watches" },
  { label: "Best Sellers", href: "/watches" },
  { label: "Limited Editions", href: "/watches" },
  { label: "Our Story", href: "/watches" },
];

const supportLinks = [
  "Contact Us",
  "Shipping & Returns",
  "Product Care",
  "Warranty",
  "FAQ",
];

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
              {[48, 40, 30, 20, 10].map((r) => (
                <circle
                  key={r}
                  cx="50"
                  cy="50"
                  r={r}
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              ))}
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
        {/* Newsletter */}
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

        {/* Main footer grid */}
        <div className={a.mainGrid}>
          {/* Column 1: Brand (FIX: forced column layout) */}
          <div className={a.brandSection} style={{ display: "block" }}>
            <div
              className={a.brandContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
                width: "100%",
              }}
            >
              <div className={a.brandIconContainer}>
                <div className={a.brandIconPing}>
                  <Clock className={a.brandIcon} />
                </div>
                <span className={a.brandName}>ChronoElite</span>
              </div>

              <p className={a.brandDescription} style={{ maxWidth: "100%" }}>
                Crafting timeless pieces for the discerning individual; where
                precision meets elegance in every detail.
              </p>

              <div
                className={a.socialIconsContainer}
                style={{ display: "flex", gap: "0.75rem" }}
              >
                {socialLinks.map(({ Icon, label }) => (
                  <a
                    href="#"
                    key={label}
                    aria-label={label}
                    className={a.socialIcon}
                  >
                    <Icon className={a.socialIconInner} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className={a.sectionHeading}>
              <ChevronRight className={a.sectionIcon} />
              Explore
            </h3>

            <ul className={a.linksList}>
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={a.linkItem}>
                    <ChevronRight className={a.linkIcon} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className={a.sectionHeading}>
              <ChevronRight className={a.sectionIcon} />
              Support
            </h3>
            <ul className={a.linksList}>
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className={a.supportLink}>
                    <ChevronRight className={a.linkIcon} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
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

        {/* Bottom line */}
        <div className={a.bottomSection}>
          <p className={a.copyright}>
            &copy; {new Date().getFullYear()} ChronoElite. Crafted with{" "}
            <Heart className={a.heartIcon} /> in Bangladesh
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