import React from "react";
import { NewsCard } from "./News-card";
import { newsData } from "./newsData";
import { MdOutlineArticle } from "react-icons/md";
import "./news.styles.css";

export const News = () => {
  return (
    <div className="news-container">
      <div className="news-header-container">
        <span className="news-header-main">
          {" "}
          <MdOutlineArticle className="news-icon" /> NEWS & ARTICLES
        </span>
      </div>

      <div className="news-cards-container">
        {newsData.map((news, key) => {
          if (key < 4) return <NewsCard key={key} options={news} />;
        })}
      </div>
    </div>
  );
};
