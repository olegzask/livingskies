import React from "react";
import { services } from "../service-card-component/services";
import { MdMiscellaneousServices } from "react-icons/md";
import ServiceCard from "../service-card-component/service-card";
import "./services.styles.css";

export const Services = () => {
  return (
    <div className="services-main-container">
      <div className="header-container">
        <header id="services" className="service-header">
          <MdMiscellaneousServices className="services-icon" /> SERVICES
        </header>
      </div>
      <div className="services-container">
        {services.map((service) => {
          return <ServiceCard key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
};
