import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { WindowCard } from "./WindowCard";
import { setZero } from "./handlers";
import "./calculator.styles.css";

export const Calculator = () => {
  const [checked, setChecked] = useState(false);
  const [windowList, setWindowList] = useState([]);
  const [range, setRange] = useState(0);

  const addRange = () => {
    const newRange = document.getElementById("range-input").value;
    windowList.length === 0 ? setRange(0) : setRange(+newRange);
    document.getElementById("range-input").value = "";
  };

  const resetRange = () => {
    setRange(0);
  };

  const addWindow = () => {
    const wdth = Math.abs(+document.getElementById("width").value);
    const hgh = Math.abs(+document.getElementById("height").value);
    const qt =
      Math.abs(+document.getElementById("qty").value) < 1
        ? 1
        : Math.abs(+document.getElementById("qty").value);
    const nts = document.getElementById("notes").value;
    const curWindow = {
      width: wdth,
      height: hgh,
      qty: qt,
      notes: nts,
      id: windowList.length + 1,
      priceTotal: Math.round(wdth * hgh * 0.0695) * qt,
    };
    setWindowList([...windowList, curWindow]);
    setZero();
  };

  const grandTotalPrice = () =>
    windowList.reduce((total, el) => {
      return total + el.priceTotal;
    }, 0);

  const deleteWindow = (event) => {
    const targetWindow = event.target.closest(".windowcard-container");
    const windowId = +targetWindow.id;
    const newList = windowList.filter((el) => el.id !== windowId);

    setWindowList(newList);
  };

  const check = () => {
    const box = document.getElementById("range-checkbox");
    if (box.checked) setChecked(true);
    if (!box.checked) setChecked(false);
  };

  return (
    <div className="calculator-outer-continer">
      <div className="calculator-inner-container">
        <div className="calc-leftside">
          <header className="leftside-header">
            HOME & OFFICE TINT CALCULATOR
          </header>
          <div className="leftside-description">
            <span className="descript">
              {" "}
              * Add your windows to the list to see total price.
            </span>
            <span className="descript">
              {" "}
              * Price includes installation within Prince Albert area. For
              installation outside Prince Albert, select "RANGE" option.
            </span>
          </div>
          <div className="form-inputs">
            <input
              className="input-field"
              required
              id="width"
              type="number"
              min="0"
              name="width"
              placeholder="Width in inches"
            />
            <input
              className="input-field"
              required
              min="0"
              id="height"
              type="number"
              name="height"
              placeholder="Height in inches"
            />
            <input
              className="input-field"
              required
              id="qty"
              min="1"
              type="number"
              name="qty"
              placeholder="How many?"
            />
            <button onClick={addWindow} className="btn addwindow-btn">
              ADD
            </button>
          </div>
          <textarea type="text" id="notes" placeholder="Any notes?"></textarea>
          <div className="range-container">
            <input onClick={check} type="checkbox" id="range-checkbox" />
            <span className="range-header">
              Installing outside Prince Albert?
            </span>
          </div>
          {checked ? (
            <div className="range-counter">
              <input
                id="range-input"
                type="number"
                min="5"
                placeholder="How many KMs?"
              />{" "}
              <button onClick={addRange} className="btn addrange-btn">
                ADD RANGE
              </button>
            </div>
          ) : null}
        </div>

        <div className="calc-rightside">
          <header className="rightside-header">WINDOWS LIST</header>
          <div className="window-list-container">
            {windowList.map((window, id) => {
              return <WindowCard key={id} opts={{ ...window, deleteWindow }} />;
            })}
          </div>
          <div className="price-tax">
            <span className="taxes">
              Travel: ${(range * 2 * 2).toFixed(2)}{" "}
              {range > 0 ? (
                <AiOutlineCloseCircle
                  onClick={resetRange}
                  className="close-icon"
                />
              ) : null}
            </span>
            <span className="taxes">
              GST/HST: $
              {(((grandTotalPrice() + range * 2 * 2) / 100) * 5).toFixed(2)}
            </span>
            <span className="taxes">
              PST: $
              {(((grandTotalPrice() + range * 2 * 2) / 100) * 6).toFixed(2)}
            </span>
            <span className="grandtotal-price">
              Total Price: $
              {(
                grandTotalPrice() +
                range * 2 * 2 +
                ((grandTotalPrice() + range * 2 * 2) / 100) * 11
              ).toFixed(2)}
            </span>
            {/* <button className="btn btn-checkout">Checkout</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
