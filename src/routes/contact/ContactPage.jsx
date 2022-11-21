import React from "react";
import { ContactForm } from "../../components/contactform/ContactForm";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Map } from "../../components/map-component/Map";
import "./contactPage.styles.css";

export const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-inner">
        <ContactForm />
        <div className="contact-page-direct">
          <span className="contact-direct-header">Direct Contact</span>
          <a className="direct" href="tel:13069618468">
            <BsFillTelephoneFill className="loc-icon" /> 1-306-961-8468
          </a>
          <a className="direct" href="mailto:info@lswt.ca">
            <MdEmail className="loc-icon" />
            info@lswt.ca
          </a>
          <a
            target="_blank"
            className="direct"
            href="https://www.google.com/maps/place/Living+Skies+Window+Tint/@53.198966,-105.758317,13z/data=!4m5!3m4!1s0x0:0x23f493ff614209ff!8m2!3d53.1987579!4d-105.7583135?hl=en-GB"
          >
            <div className="business">
              <div className="business-address">
                <MdLocationOn className="loc-icon" />
                160C 16th Street West, <br /> Prince Albert, Saskatchewan <br />
                Canada, S6V 3V3
              </div>
              <Map />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
