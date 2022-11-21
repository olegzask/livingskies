import React from "react";
import { Link } from "react-router-dom";

import "./about.styles.css";

export const About = () => {
  const buttonPressed = () => {
    console.log("Button Pressed!");
  };
  return (
    <div className="about-main-container">
      <div className="about-container">
        <header className="about-header">About Our Company</header>
        <div className="about-context">
          <p className="about-text">
            Living Skies was born in 2015. Working out of a two car garage,
            taking by appointment bookings & working up to locking in dealership
            contracts.
          </p>
          <p className="about-text">
            We quickly outgrew the garage and moved into a colaboration with
            Sign Universe in 2016. For the next year & half wit the help of
            their equipment, we were able to save and move forward with
            purchasing our first large scale plotter for cutting film. With the
            purchase we also made our second expansion move to the TBS Collision
            space and set up shop there for two years.
          </p>
          <p className="about-text">
            Again we outgrew that location and in 2020 moved to our current
            location that doubled our workspace yet again. With this move we
            also made our next large purchase - 64 inch large format printer
            that we use for all sorts of graphics, decals, wraps & more. It
            opened up a whole new revenue stream for us and fell in line with
            things we loved to do... WRAP STUFF!
          </p>
        </div>

        <Link to="/contact">
          <button className="btn-about">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
