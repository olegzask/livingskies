import React from "react";
import { Services } from "../../components/services-component/services";
import ImageSlider from "../../components/slider-component/slider";
import { Whyus } from "../../components/whyus-component/whyus";
import { News } from "../../components/news-component/News";
import { SliderData } from "../../components/slider-component/slider-data";
import { Brands } from "../../components/brands-components/Brands";
import "./home.styles.css";

export const Home = () => {
  return (
    <div className="home-page">
      <video
        className="main-video"
        width="100%"
        src="images/slider-images/lswt3.mp4"
        autoplay="autoplay"
        muted
        loop
      />
      <ImageSlider slides={SliderData} />
      <Services />
      <Whyus />
      <Brands />
    </div>
  );
};
