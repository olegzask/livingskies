import React from "react";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import "./footer.styles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="help-container ">
          <section className="ul-help">
            <span className="container-header">LINKS</span>
            <a href="/about" className="footer-link">
              About
            </a>
            {/* <a href="/myaccount" className="footer-link">
              My Account
            </a> */}
            <a href="/productcare" className="footer-link">
              Product Care
            </a>
            {/* <a href="/warranty" className="footer-link">
              Warranty Information
            </a> */}

            <a href="/faq" className="footer-link">
              FAQ
            </a>
          </section>
        </div>
        <div className="company-container">
          <section className="ul-help">
            <span className="container-header">COMPANY</span>
            <a href="/team" className="footer-link">
              Our Team
            </a>
            <a href="/media" className="footer-link">
              Media
            </a>
            {/* <a href="/news" className="footer-link">
              News
            </a> */}
            <a href="/careers" className="footer-link">
              Careers
            </a>
          </section>
        </div>
        <div className="contact-container">
          <section className="ul-help">
            <span className="container-header">CONTACT</span>
            <a href="tel:13069618468" className="footer-link">
              1-306-961-8468
            </a>
            <a href="mailto:livingskiestint@gmail.com" className="footer-link">
              livingskiestint@gmail.com
            </a>
            <a href="/contact" className="footer-link">
              Contact Form
            </a>
          </section>
        </div>
        <div className="social-container">
          <section className="ul-help ">
            <span className="container-header">SOCIAL MEDIA</span>
            <div className="social-icons-container">
              <a
                target="_blank"
                href="https://www.facebook.com/tintkng"
                className="footer-link"
              >
                <FaFacebookSquare className="social-icon" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/livingskieswindowtint"
                className="footer-link"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@livingskieswindowtint"
                className="footer-link"
              >
                <FaTiktok className="social-icon" />
              </a>
            </div>
          </section>
        </div>
      </div>
      <h2 className="copyright">
        Website by{" "}
        <a href="https://www.facebook.com/oleg.zaskovets.58" className="oleg">
          {" "}
          Oleg Zaskovets{" "}
        </a>{" "}
        2022 All Rights Reserved
      </h2>
    </div>
  );
};
