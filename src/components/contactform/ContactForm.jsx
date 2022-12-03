import React, { useState, useRef } from "react";
import { ErrorPopup } from "./ErrorPopup";
import emailjs from "@emailjs/browser";
import { services } from "../service-card-component/services";
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

    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userTel = document.getElementById("tel");
    const userVehicle = document.getElementById("vehicle");
    const userService = document.getElementById("serv");
    const userNotes = document.getElementById("usernotes");

    const errorChecker = () => {
      const missingFields = {
        missing: [],
      };

      if (!userName.value) missingFields.missing.push("Name");
      if (!userEmail.value) missingFields.missing.push("Email");
      if (!userTel.value) missingFields.missing.push("Phone");
      if (!userVehicle.value) missingFields.missing.push("Vehicle");
      if (!userNotes.value) missingFields.missing.push("Message");
      if (!userService.value || userService.value === "default")
        missingFields.missing.push("Service");
      alert(
        `Missing Info: ${missingFields.missing.map((el) => el)}, Please check!`
      );
    };

    if (
      !userName.value ||
      !userEmail.value ||
      !userTel.value ||
      !userVehicle.value ||
      userService.value === "default"
    ) {
      errorChecker();
    } else {
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
      alert("Thank you for submitting your request. We will reply shortly!");
    }
  };

  const setFields = (event) => {
    const serviceOpt = document.getElementById("serv").value;
    const id = event.target.id;
    setFormInfo({ ...formInfo, [id]: event.target.value, service: serviceOpt });
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
          placeholder="Message / Any specific instruction or questions"
          name="message"
        ></textarea>
      </form>
      <button className="btn btn-submit" onClick={sendEmail}>
        SUBMIT
      </button>
    </div>
  );
};
