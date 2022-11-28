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
      document.getElementById("mdealer").style.height = "auto";
      document.getElementById("bookbutn").classList.add("visible");
      document.getElementById("subm_btn").style.display = "none";
      document.getElementById("logout_btn").style.display = "block";
    }

    if (ghl + "" !== password) {
      alert("Wrong Password!");
      document.getElementById("pwinput").value = "";
    }
  };

  const hidePrice = () => {
    document.getElementById("mdealer").classList.remove("visible");
    document.getElementById("bookbutn").classList.remove("visible");
    document.getElementById("subm_btn").style.display = "block";
    document.getElementById("logout_btn").style.display = "none";
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
        <button onClick={showPrice} id="subm_btn" className="btn btn-submitpw">
          SUBMIT
        </button>
        <button
          onClick={hidePrice}
          id="logout_btn"
          className="btn btn-submitpw"
        >
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
