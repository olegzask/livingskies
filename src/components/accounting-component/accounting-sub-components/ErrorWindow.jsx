import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./errorwindow.styles.css";

export const ErrorWindow = ({ list }) => {
  const closeModal = () => {
    const errModal = document.getElementById("err-wdw");
    errModal.classList.remove("error-active");
  };

  return (
    <div className="error-window" id="err-wdw">
      <span className="err-msg">Fix Following Issues:</span>

      <div className="error-list">
        {list.map((err) => (
          <span className="err-name">
            <AiOutlineCloseCircle /> {err} is missing
          </span>
        ))}
        <button onClick={closeModal} className="btn close-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};
