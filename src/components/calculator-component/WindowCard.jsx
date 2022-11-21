import React from "react";
import { NotesModal } from "./NotesModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import "./windowcard.styles.css";

export const WindowCard = ({ opts }) => {
  const { width, height, qty, notes, id, deleteWindow, priceTotal } = opts;

  const showModal = (event) => {
    const notesButtonId = event.target.value;
    const customId = `modal-${notesButtonId}`;
    const modal = document.getElementById(customId);

    Array.from(document.getElementsByClassName("notesmodal-container")).map(
      (el) => el.classList.remove("modal-active")
    );
    Array.from(document.getElementsByClassName("windowcard-container")).map(
      (el) => el.classList.remove("active-window")
    );

    !modal.classList.contains("modal-active")
      ? modal.classList.add("modal-active")
      : modal.classList.remove("modal-active");

    !event.target
      .closest(".windowcard-container")
      .classList.contains("active-window")
      ? event.target
          .closest(".windowcard-container")
          .classList.add("active-window")
      : event.target
          .closest(".windowcard-container")
          .classList.remove("active-window");
  };

  return (
    <div id={id} className="windowcard-container">
      <MdDeleteForever onClick={deleteWindow} className="close-icon" />
      <span className="hedr window-width">{` ${width}W x ${height}H`}</span>
      <span className="hedr window-qty">Qty: {qty}</span>
      <span className="hedr window-price">Total: ${priceTotal}</span>
      <button onClick={showModal} value={id} className=" btn btn-window-notes">
        NOTES
      </button>
      <NotesModal
        info={{
          width: width,
          height: height,
          qty: qty,
          notes: notes,
          price: priceTotal,
          id: `modal-${id}`,
        }}
      />
    </div>
  );
};
