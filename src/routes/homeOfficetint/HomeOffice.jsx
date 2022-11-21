import React from "react";
import { officeOptions } from "./officeOpts";
import { TintCard } from "../autotint/tint-card";

import "../autotint/autotint.styles.css";

export const HomeOffice = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <header className="autotint-header">Home & Office Window Tint</header>

          <span className="tint-description">
            Is your residence or office getting to hot or gets to much glare
            during the day time? You still can enjoy the sun without sacrificing
            your views! We hava commercial window tint that will make your
            window problems disappear. From light shades to privacy options.
          </span>
          <br />

          <span className="tint-description-lower">
            NOT SURE WHAT KIND OF FILM YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>

        {officeOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
