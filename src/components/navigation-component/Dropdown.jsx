import React from "react";
import { services } from "../service-card-component/services";
import "./dropdown.styles.css";

export const Dropdown = () => {
  return (
    <div className="services-dropdown-container">
      {services.map((service, id) => {
        return (
          <a key={id} className="drop-link" href={service.link}>
            {service.serviceName.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
};
