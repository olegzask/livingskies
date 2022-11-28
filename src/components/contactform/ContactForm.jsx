import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { services } from "../service-card-component/services";
import { Button } from "../../components/button-component/button";
import "./contactform.styles.css";

const formSkeleton = {
  name: "",
  tel: "",
  email: "",
  vehicle: "",
  usernotes: "",
  service: String,
};

export const ContactForm = () => {
  const [fetchedInfo, setFetchedInfo] = useState();
  const [formInfo, setFormInfo] = useState(formSkeleton);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzjei07",
        "template_1ghrbsp",
        form.current,
        "EdFYBsAAe4ETIUbxP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const setFields = (event) => {
    const serviceOpt = document.getElementById("serv").value;
    const id = event.target.id;
    setFormInfo({ ...formInfo, [id]: event.target.value, service: serviceOpt });
  };

  const print = () => {
    console.log(formInfo);
  };

  const info = async () => {
    const data = await fetch("http://localhost:3001/api");
    const jtext = await data.json();
    setFetchedInfo(jtext.message);
    console.log(jtext);
  };
  return (
    <div className="contactform-container">
      <h2 className="contactform-header">SUBMIT YOUR REQUEST</h2>
      <form ref={form} className="contact-form" action="" method="get">
        <div className="form-top">
          <div className="form-top-left">
            <input
              onChange={setFields}
              className="inp-name"
              type="text"
              id="name"
              placeholder="Name"
              name="from_name"
            />
            <input
              onChange={setFields}
              className="inp-phone"
              type="number"
              id="tel"
              placeholder="Phone Number"
              name="from_phone"
            />
          </div>

          <div className="form-top-right">
            <input
              onChange={setFields}
              type="email"
              id="email"
              placeholder="Email"
              name="from_email"
            />
            <input
              onChange={setFields}
              type="text"
              id="vehicle"
              placeholder="Vehicle Year, Make & Model"
              name="from_vehicle"
            />
          </div>
        </div>

        <select name="from_service" className="service-select" id="serv">
          <option value="default">Service</option>
          {services.map((service, id) => {
            return (
              <option key={id} value={service.serviceName.toLowerCase()}>
                {service.serviceName}
              </option>
            );
          })}
        </select>
        <textarea
          onChange={setFields}
          type="text"
          id="usernotes"
          placeholder="Any specific instruction or questions"
          name="message"
        ></textarea>
      </form>
      <button className="btn btn-submit" onClick={sendEmail}>
        SUBMIT
      </button>
    </div>
  );
};
