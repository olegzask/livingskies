import React from "react";
import "./notesmodal.styles.css";

export const NotesModal = ({ info }) => {
  const { notes, id, width, height, qty, price } = info;

  const closeModal = (event) => {
    const btnbId = event.target.name;
    const targetModal = document.getElementById(btnbId);
    targetModal.classList.remove("modal-active");

    event.target
      .closest(".windowcard-container")
      .classList.remove("active-window");
  };

  return (
    <div id={id} className="notesmodal-container">
      <div className="modal-text">
        <span className="modal-size">
          Window Size: {width}x{height}
        </span>
        <span className="modal-size">Quantity: {qty}</span>
        <span>{notes}</span>
        <span className="modal-price modal-size">Price Total: ${price}</span>
      </div>

      <button onClick={closeModal} name={id} className="btn btn-closemodal">
        CLOSE
      </button>
    </div>
  );
};
