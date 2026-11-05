import { navbarStyles as a } from "../assets/dummyStyles";
import { BaggageClaim, Clock, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../cartContext";
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

  const { totalItems } = useCart();
  const [loggedIn, setLoggedIn] = useState(() => {
    try {
      return (
        localStorage.getItem("isLoggedIn") === "true" ||
        !!localStorage.getItem("authToken")
      );
    } catch (error) {
      return false;
      console.log(error);
    }
  });

  useEffect(() => {
    setActive(location.pathname || "/");
  }, [location]);
  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };
  const handleLogout = () => {
    try {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("authToken");
    } catch (error) {
      setLoggedIn(false);
      setOpen(false);
      navigate("/");
      console.log(error);
    }
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
              {totalItems > 0 && (
                <span className={a.cartBadge}>{totalItems}</span>
              )}
            </Link>
            {!loggedIn ? (
              <Link to="/login" className={a.accountLink}>
                <User className={a.accountIcon} />
                <span className={a.accountText}>Account</span>
              </Link>
            ) : (
              <button onClick={handleLogout} className={a.accountLink}>
                <User className={a.accountIcon} />
                <span className={a.accountText}>Logout</span>
              </button>
            )}

            {/* mobile toggle */}
            <div className={a.mobileMenuButton}>
              <button onClick={() => setOpen(!open)} className={a.menuButton}>
                {open ? (
                  <X className={a.menuIcon} />
                ) : (
                  <Menu className={a.menuIcon} />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigations */}
        {open && (
          <div className={a.mobileMenu}>
            <div className={a.mobileMenuContainer}>
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`${a.mobileNavItemBase} ${isActive ? a.mobileNavItemActive : a.mobileNavItemInactive}`}
                  >
                    <span className={a.mobileNavItemText}>{item.name}</span>
                  </Link>
                );
              })}

              <div className={a.mobileAccountContainer}>
                {!loggedIn ? (
                  <Link
                    to="/login"
                    onClick={() => {
                      setOpen(false);
                      handleNavClick("/login");
                    }}
                    className={a.mobileAccountLink}
                  >
                    <User className={a.mobileAccountIcon} />
                    <span>Account</span>
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className={a.mobileAccountButton}
                  >
                    <User className={a.mobileAccountIcon} />
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
