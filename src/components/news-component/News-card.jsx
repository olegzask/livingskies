import React from "react";
import { Button } from "../button-component/button";
import "./news-card.styles.css";

export const NewsCard = ({ options }) => {
  const { text, img, header } = options;
  return (
    <div className="news-card-container">
      <div className="news-img-container">
        <img className="news-card-img" src={img} alt="news-image" />
      </div>

      <div className="news-content-container">
        <span className="news-header">{header.toUpperCase()}</span>

        <div className="text-container">
          <span className="news-text">{text}</span>
        </div>
      </div>
      <div className="but-cont">
        <Button options={{ text: "Read", className: "btn-news" }} />
      </div>
    </div>
  );
};
