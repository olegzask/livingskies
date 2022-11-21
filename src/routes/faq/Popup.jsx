import React from "react";
import "./popup.styles.css";

export const Popup = ({ opts }) => {
  const { id, text } = opts;
  return (
    <div id={id} className="popup-container">
      {text}
    </div>
  );
};
