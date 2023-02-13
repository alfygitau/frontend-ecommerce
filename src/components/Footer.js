import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../assets/images/newsletter.png";
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text search-icon text-white"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-2">Contact us</h4>
              <div>
                <address className="text-white fs-6">
                  Nakuru: 1734 Umoja street, <br /> opposite Nairobi Women
                  Hospital
                </address>
                <a
                  href="tel:+254769404436"
                  className="mt-2 text-white d-block mb-1"
                >
                  +254769404436
                </a>
                <a
                  href="mailto:alfygitau@gmail.com"
                  className="mt-2 text-white d-block mb-0"
                >
                  alfygitau@digitec.net
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a href="/">
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a href="/">
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a href="/">
                    <BsFacebook className="text-white fs-5" />
                  </a>
                  <a href="/">
                    <BsTwitter className="text-white fs-5" />
                  </a>
                  <a href="/">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-2">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white mb-1">
                  Privacy policy
                </Link>
                <Link to="refund-policy" className="text-white mb-1">
                  Refund policy
                </Link>
                <Link to="shipping-policy" className="text-white mb-1">
                  Shipping policy
                </Link>
                <Link to="terms-of-service" className="text-white mb-1">
                  Terms of service
                </Link>
                <Link to="blogs" className="text-white mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-2">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1">Search</Link>
                <Link className="text-white mb-1">About us</Link>
                <Link className="text-white mb-1">Faq</Link>
                <Link className="text-white mb-1">Contact</Link>
                <Link className="text-white mb-1">Size chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-2">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1">Laptops</Link>
                <Link className="text-white mb-1">Headphones</Link>
                <Link className="text-white mb-1">Tablets</Link>
                <Link className="text-white mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} Powered By Digitec Shop
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
