import React, { useState } from "react";
import { packages } from "./packages";
import { PackCard } from "./PackCard";
import ".//dealer.styles.css";

export const Dealer = () => {
  const [isDealer, setIsDealer] = useState(false);
  const [password, setPassword] = useState("lswtdealer");

  const showPrice = () => {
    const ghl = document.getElementById("pwinput").value;
    console.log(ghl);
    console.log(isDealer);
    if (ghl + "" === password) {
      document.getElementById("pwinput").value = "";
      document.getElementById("mdealer").classList.add("visible");
      document.getElementById("bookbutn").classList.add("visible");
    }

    if (ghl + "" !== password) {
      alert("Wrong Password!");
      document.getElementById("pwinput").value = "";
    }
  };

  const hidePrice = () => {
    document.getElementById("mdealer").classList.remove("visible");
    document.getElementById("bookbutn").classList.remove("visible");
  };

  return (
    <div id="dealer-ctn">
      <div className="dealer-login">
        <input
          className="input-pw"
          placeholder="Please enter password"
          type="text"
          id="pwinput"
        />
        <button onClick={showPrice} className="btn btn-submitpw">
          SUBMIT
        </button>
        <button onClick={hidePrice} className="btn btn-submitpw">
          LOG OUT
        </button>
      </div>

      <div className="main-dealer-container" id="mdealer">
        {packages.map((el) => (
          <PackCard opts={el} />
        ))}
      </div>
      <a className="book" href="/contact">
        <button id="bookbutn" className="btn btn-book">
          Book A Vehicle
        </button>
      </a>
    </div>
  );
};
