import React, { Fragment, useState } from "react";
import { Footer } from "../footer-component/footer";
import { Dropdown } from "./Dropdown";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { RiMenuUnfoldLine, RiCloseLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./navigation.styles.css";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const servicesHover = () => {
    const [dropMenu] = document.getElementsByClassName("dropdown-men");

    !dropMenu.classList.contains("dropdown-active")
      ? dropMenu.classList.add("dropdown-active")
      : dropMenu.classList.remove("dropdown-active");
  };

  const toggleNavMobile = () => {
    const navBar = document.getElementById("nav-cont");

    const mobCont = document.getElementById("mob-btn");

    !navBar.classList.contains("active")
      ? navBar.classList.add("active") &
        mobCont.classList.add("fixed") &
        setClicked(true)
      : navBar.classList.remove("active") &
        mobCont.classList.remove("fixed") &
        setClicked(false);
  };

  return (
    <Fragment>
      <div className="navigation">
        <div className="left-side-nav">
          <a className="contact-link" href="/dealer">
            Dealer
          </a>
          <a className="contact-link contact-link-phone" href="tel:13069618468">
            <BsFillTelephoneFill className="icons" id="phone" />
            Call Us
          </a>
          <a
            className="contact-link contact-link-email"
            href="mailto:livingskiestint@gmail.com"
          >
            <MdEmail className="icons" />
            Email us
          </a>
        </div>
        <div className="nav-container">
          <div className="nav-links-container" id="nav-cont">
            <a className="nav-link home" href="/">
              HOME
            </a>

            <a
              onMouseEnter={servicesHover}
              className="nav-link services"
              href="/services"
            >
              SERVICES
            </a>

            <a className="nav-link simulator" href="/simulator">
              SIMULATOR
            </a>

            <a className="nav-link" href="/contact">
              CONTACT US
            </a>
            {/* <a className="nav-link myaccount" href="/myaccount">
              MY ACCOUNT
            </a> */}
          </div>

          <div id="mob-btn" className="menu-mobile-container">
            {!clicked ? (
              <RiMenuUnfoldLine
                onClick={toggleNavMobile}
                className="menu-button-mobile"
              />
            ) : (
              <RiCloseLine
                onClick={toggleNavMobile}
                className="menu-button-mobile"
              />
            )}
          </div>
          <div className="nav-logo-container">
            <a href="/">
              <img
                href="/"
                className="logo"
                src="/images/logos/lswt_bw_png.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div onMouseLeave={servicesHover} className="dropdown-men">
        <Dropdown />
      </div>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
