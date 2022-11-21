import React from "react";
import { ppfOptions } from "../paintprotection/ppfOpts";
import { TintCard } from "../autotint/tint-card";

import "../autotint/autotint.styles.css";

export const PaintProtection = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <header className="autotint-header">Paint Protection Film</header>

          <span className="tint-description">
            Don't let your paint, exterior & interior surfaces take a beating.
            Explore a variety of protective films perfect for any application
            available for your vehicle. Protect your investment!
          </span>
          <br />

          <span className="tint-description-lower">
            NOT SURE WHAT KIND OF FILM YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>

        {ppfOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
