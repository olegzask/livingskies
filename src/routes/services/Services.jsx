import React from "react";
import { Automotivetint } from "../autotint/Automotivetint";
import { services } from "../../components/service-card-component/services";
import { Button } from "../../components/button-component/button";
import "./services-page.styles.css";

export const Services = () => {
  return (
    <div className="services-page-container">
      <span className="page-header">OUR SERVICES</span>
      {services.map((service) => {
        const { id, serviceName, img, description, simulator, link } = service;

        const btnTxt = (name) => {
          if (name === "Home & Office Tint" || name === "Advertising Wraps")
            return "CALCULATOR";
          if (name === "Automotive Tint" || name === "Paint Protection Film")
            return "SIMULATOR";
          if (name === "Powersports") return "DESIGNER";
        };

        return (
          <div key={id} className="service-div autotint-div">
            <div className="text-side-div">
              <h2 className="name-service">{serviceName}</h2>
              <div className="service-description">{description}</div>
              <div className="buttons-container">
                <Button
                  id={id}
                  options={{
                    text: "LEARN MORE",
                    className: "button btn-learn",
                    link: link,
                  }}
                />
                {/* <Button
                  options={{ text: "PRICES", className: "button btn-prices" }}
                /> */}
                <Button
                  options={{
                    link: simulator,
                    text: btnTxt(serviceName),

                    className: "button btn-simulator",
                  }}
                />
              </div>
            </div>

            <img className="service-img" src={img} alt={service.name} />
          </div>
        );
      })}
    </div>
  );
};
