import React from "react";
import ".//packcard.styles.css";

export const PackCard = ({ opts }) => {
  const { name, includes, dealerPrice, retailPrice } = opts;
  return (
    <div className="pack-container">
      <div className="pack-info">
        <h3 className="pack-name">{name}:</h3>
        <ul>
          {includes.map((el) => (
            <li className="pack-el">- {el}</li>
          ))}
        </ul>
      </div>

      <h4 className="price-dealer">Dealer Price: {dealerPrice}</h4>
      <h4 className="price-retail">Suggested Retail Price: {retailPrice}</h4>
    </div>
  );
};
