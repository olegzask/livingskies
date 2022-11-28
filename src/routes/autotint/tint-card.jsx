import React from "react";
import { Button } from "../../components/button-component/button";
import "./tint-card.styles.css";

export const TintCard = ({ options }) => {
  const { tintType, description, brands, shades, features, img, office, link } =
    options;

  const btnText = () => {
    let txt;
    if (office) txt = "CALCULATOR";
    if (!office) txt = "SIMULATOR";
    return txt;
  };

  return (
    <div className="card-container">
      <div className="tint-card-left">
        <h2 className="card-header">{tintType}</h2>
        <img className="card-img" src={img} alt="" />
        <span className="card-description">{description}</span>
        <div className="shades-ctn">
          {shades ? (
            <header className="shade-header">SHADES AVAILABLE:</header>
          ) : null}

          {shades ? (
            <span className="tint-shades">
              {shades.map((shade, id) =>
                id < shades.length - 1 ? `${shade}  /  ` : `${shade}`
              )}
            </span>
          ) : null}
        </div>

        <div className="btns-container">
          <Button
            options={{
              text: btnText(),
              className: "btn-card",
              link: `/${btnText().toLocaleLowerCase()}`,
            }}
          />
          <Button
            options={{
              text: "BOOK APOINTMENT",
              className: "btn-card",
              link: "/contact",
            }}
          />
        </div>
      </div>

      <div className="tint-card-right">
        <h2 className="features-header">SIGNATURE FEATURES</h2>
        <div className="features-list">
          {features.map((feat, id) => {
            const { symbol, description, name } = feat;

            return (
              <div key={id} className="feature">
                <header className="feat-name">{name}</header>

                <div className="feat-container">
                  <div className="feature-icon">{symbol}</div>
                  <span className="feat-description">{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
