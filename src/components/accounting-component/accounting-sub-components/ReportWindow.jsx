import React from "react";
import "./reportwindow.styles.css";

export const ReportWindow = () => {
  return (
    <div className="reportwindow-container">
      <div className="container-top">
        <span className="hdr">Report Window</span>
      </div>

      <div className="rep-content">
        <span>HUER</span>
        <span>HUER</span>
        <span>HUER</span>
      </div>

      <div className="container-bottom">
        <button className="btn btn-closerep"> Close</button>
      </div>
    </div>
  );
};
