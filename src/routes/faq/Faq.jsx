import React, { useState } from "react";
import { Popup } from "./Popup";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { answers } from "./helpers";
import "./faq.styles.css";

export const Faq = () => {
  const [clicked, setClicked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const { first, second, third, fourth } = clicked;

  const popUp = (curId) => {
    if (curId === "first") return "one";
    if (curId === "second") return "two";
    if (curId === "third") return "three";
    if (curId === "fourth") return "four";
  };

  const swapIcons = (event) => {
    const targ = event.target.closest(".faq-question");
    const checker = !targ.classList.contains("eban");
    const id = targ.id + "";
    const popWindow = document.getElementById(popUp(id));
    !targ.classList.contains("eban")
      ? targ.classList.add("eban")
      : targ.classList.remove("eban");
    !popWindow.classList.contains("visible")
      ? popWindow.classList.add("visible")
      : popWindow.classList.remove("visible");
    setClicked({
      ...clicked,
      [id]: checker ? true : false,
    });
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>

      <div className="questions-container">
        <div className="question-container">
          <span onClick={swapIcons} id="first" className="faq-question">
            {!first ? (
              <FaQuestionCircle className="question-icon" />
            ) : (
              <IoMdArrowDropupCircle
                onClick={swapIcons}
                className="question-icon"
              />
            )}{" "}
            How Much does it cost to tint my vehicle?
          </span>
          <Popup opts={{ id: "one", text: answers.firstQuestion }} />
        </div>

        <div className="question-container">
          <span onClick={swapIcons} id="second" className="faq-question">
            {!second ? (
              <FaQuestionCircle onClick={swapIcons} className="question-icon" />
            ) : (
              <IoMdArrowDropupCircle
                onClick={swapIcons}
                className="question-icon"
              />
            )}{" "}
            How Much does it cost to instal PPF on my vehicle?
          </span>
          <Popup opts={{ id: "two", text: answers.secondQuestion }} />
        </div>

        <div className="question-container">
          <span onClick={swapIcons} id="third" className="faq-question">
            {!third ? (
              <FaQuestionCircle onClick={swapIcons} className="question-icon" />
            ) : (
              <IoMdArrowDropupCircle
                onClick={swapIcons}
                className="question-icon"
              />
            )}{" "}
            Is my vehicle bullet proof now?
          </span>
          <Popup opts={{ id: "three", text: answers.thirdQuestion }} />
        </div>

        <div className="question-container">
          <span onClick={swapIcons} id="fourth" className="faq-question">
            {!fourth ? (
              <FaQuestionCircle onClick={swapIcons} className="question-icon" />
            ) : (
              <IoMdArrowDropupCircle
                onClick={swapIcons}
                className="question-icon"
              />
            )}{" "}
            What is the difference between dyed film and ceramic film?
          </span>
          <Popup opts={{ id: "four", text: answers.fourthQuestion }} />
        </div>
      </div>
    </div>
  );
};
