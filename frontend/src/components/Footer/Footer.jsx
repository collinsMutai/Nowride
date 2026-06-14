import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
         <Link
  to="/"
  className="footer-logo"
  onClick={scrollToTop}
>
  <img
    src={logo}
    alt="NowRide Care Logo"
    className="footer-logo-image"
  />
</Link>

          <p>Non-Emergency Medical Transportation in Colorado</p>
        </div>

        <div className="footer-links">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>

          <Link to="/about" onClick={scrollToTop}>
            About
          </Link>

          <Link to="/services" onClick={scrollToTop}>
            Services
          </Link>

          <button
            className="footer-link-btn"
            onClick={() => scrollToSection("coverage")}
          >
            Service Areas
          </button>

          <Link to="/contact" onClick={scrollToTop}>
            Contact
          </Link>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} NowRide Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
