import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import "./brands.styles.css";

export const Brands = () => {
  return (
    <div className="brands-main-container">
      <div className="header-container">
        <span className="brands-header">
          <VscWorkspaceTrusted className="trust-icon" /> BRANDS WE TRUST
        </span>
      </div>

      <div className="brands-logos-container">
        <img className="brand-logo" src="images/logos/XPEL_Black.png" alt="" />
        <img
          className="brand-logo"
          src="images/logos/3m-png-logo-5119.png"
          alt=""
        />
        <img className="brand-logo" src="images/logos/avery.png" alt="" />
        <img
          className="brand-logo"
          src="images/logos/ultimateplus.png"
          alt=""
        />
      </div>
    </div>
  );
};
