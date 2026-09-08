import { Link } from "react-router-dom";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="autokart-footer mt-5">
      <div className="container">

        <div className="row py-4 align-items-center">

          {/* Brand & Address */}
          <div className="col-md-5 mb-3 mb-md-0">
            <h5 className="fw-bold mb-1">
              Auto<span className="text-danger">Kart</span>
            </h5>

            <p className="footer-address mb-1">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              Mumbai, Maharashtra, India
            </p>

            <p className="footer-contact mb-2">
              <i className="bi bi-telephone-fill text-danger me-2"></i>
              +91 98765 43210
              <span className="mx-2">|</span>
              <i className="bi bi-envelope-fill text-danger me-1"></i>
              support@autokart.com
            </p>

            {/* Social Links */}
            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold mb-2">Quick Links</h6>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/cars">Cars</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/emi">EMI Calculator</Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="col-md-3 text-md-end">
            <p className="footer-tagline mb-0">
              Your trusted destination
              <br />
              for quality used cars.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <small>
            © 2026 <strong>AutoKart</strong>. All Rights Reserved.
          </small>

          <small>
            Quality Cars • Trusted Service • Better Drive
          </small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;