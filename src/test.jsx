import React from "react";
import "./teststyles.css";
// const macd = require("../public/macds.jpg");

export const Test = () => {
  return (
    <div>
      <img className="macd" src={require("../public/macds.jpg")} alt="macdac" />
    </div>
  );
};
