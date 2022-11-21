import React from "react";
import "./productcare.css";

export const ProductCare = () => {
  return (
    <div className="productcare-container">
      <div className="care care-tint">
        <h2 className="care-header">Automotive Tint Care Information</h2>
        <span className="span-rule">
          Window tint is installed inside the vehicle glass, please follow these
          simple rules:
        </span>
        <ol>
          <li className="rule">
            - Avoid sharp objects hitting the inside that can damage the film.
          </li>
          <li className="rule">- Avoid all amonia based glass cleaners.</li>
          <li className="rule">
            - Avoid any abrasive scrub pads when cleaning your window.
          </li>
        </ol>
      </div>

      <div className="care care-ppf">
        <h2 className="care-header">Paint Protection Film Care Information</h2>
        <span className="span-rule">
          PPF is installed to protect your paint, please follow these simple
          rules:
        </span>
        <ol>
          <li className="rule">
            - Avoid automated car wash systems at all costs.
          </li>
          <li className="rule">
            - Do not hold a pressure washer nozzle close to the film to remove
            contaminents. it can cut a hole and damage the material. This type
            of damage is not covered by manufacturer's warranty.
          </li>
          <li className="rule">- Wax film regularily. Bi-Yearly is good.</li>
          <li className="rule">
            - Do not allow contaminents to sit on the film for extended periods
            of time. Clean the film thoroughly.
          </li>
        </ol>
      </div>
    </div>
  );
};
