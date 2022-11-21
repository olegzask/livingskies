import React from "react";
import { reasons } from "./reasons";
import { Link } from "react-router-dom";
import { Button } from "..//button-component/button";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

import "./whyus.styles.css";

export const Whyus = () => {
  const handler = () => {
    console.log("Get Quote pressed");
  };
  return (
    <div className="whyus-container">
      <div className="whyus-inner-container">
        <div className="whyus-left-column">
          <h2 className="whyus-header">LET US PROTECT YOUR RIDE!</h2>
          {reasons.map((reason, id) => {
            return (
              <div className="inner-div-reason" key={id}>
                <BeenhereOutlinedIcon
                  fontSize="large"
                  className="icon-reason"
                />
                <h4 className="reason">{reason}</h4>
              </div>
            );
          })}

          <div className="button-default">
            <Link to="/contact" className="btn btn-contact">
              GET QUOTE
            </Link>
          </div>
        </div>
        <div className="img-container">
          <img
            className="whyus-image"
            src="images/services-images/whyus.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
