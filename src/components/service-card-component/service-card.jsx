import React from "react";
import { SiteButton } from "../button-component/button";
import "./service-card.styles.css";

const ServiceCard = ({ service }) => {
  const serviceRedirect = (event) => {
    const elem = event.target.closest(".service-card");
    console.log(elem.querySelector(".service-name").innerHTML);
  };
  return (
    <a className="service-card" href={service.link}>
      <img className="service-image" src={service.img} alt={service.name} />
      <h2 className="service-name">{service.serviceName.toUpperCase()}</h2>
    </a>
  );
};

export default ServiceCard;
