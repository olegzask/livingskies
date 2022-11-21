import React, { useState } from "react";
import { SliderData } from "./slider-data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";
import "./slider.styles.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const arrowClick = () => {
    const targetDiv = document.getElementById("services");
    targetDiv.scrollIntoView({ behavior: "smooth" });
    console.log(targetDiv);
  };

  const nextSlide = () => {
    setCurrent(current !== length - 1 ? current + 1 : 0);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className="slider">
      <span onClick={arrowClick} className="down-arrow">
        <BsChevronCompactDown className="arrow-redirect" />
      </span>
      {/* 
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <video
                src={slide.image}
                alt="random"
                key={index}
                className="image"
                autoplay
                muted
                controls
              />
            )}
          </div>
        );
      })} */}
      {/* <video
        width="100%"
        src="images/slider-images/lswt2.mp4"
        autoplay="autoplay"
        muted
      /> */}
    </div>
  );
};

export default ImageSlider;
