import { navbarStyles as a } from "../assets/dummyStyles";
import { BaggageClaim, Clock } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Watches", href: "/watches" },
  { name: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname || "/");
  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };
  return (
    <header className={a.header}>
      <nav className={a.nav} role="navigation">
        <div className={a.container}>
          {/* BRAND LOGO */}
          <div className={a.brandContainer}>
            <div className={a.logoContainer}>
              <Clock className={a.logoIcon} />
            </div>
            <Link
              to="/"
              onClick={() => handleNavClick("/")}
              className={a.logoLink}
            >
              <span style={a.logoTextStyle} className={a.logoText}>
                ChronoElite
              </span>
            </Link>
          </div>
          <div className={a.desktopNav}>
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`${a.navItemBase} ${isActive ? a.navItemActive : a.navItemInactive}`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`${a.activeIndicator} ${isActive ? a.activeIndicatorVisible : a.activeIndicatorHidden}`}
                  ></span>
                </Link>
              );
            })}
          </div>
          {/* right side */}
          <div className={a.rightActions}>
            <Link to="/cart" className={a.cartLink}>
              <BaggageClaim className={a.cartIcon} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
