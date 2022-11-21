import React, { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { useButton } from "../state/store";
import "./dashboard.styles.css";

export const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const date = new Date();
  const fullDate = date.toLocaleString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const refreshPage = () => {
    setRefresh(!refresh ? true : false);
    const refBtn = document.getElementById("ref-btn");
    refBtn.classList.add("anim");
    setTimeout(() => refBtn.classList.remove("anim"), 1000);
  };

  return (
    <div className="dash-container">
      <header className="dash-header">
        Dashboard{" "}
        <HiOutlineRefresh
          id="ref-btn"
          className="refresh-btn"
          onClick={refreshPage}
        />
      </header>
      <span>{fullDate}</span>

      <div className="totals-container">
        <div className="total-invoices">
          <span>Total Invoices Unpaid:</span>
          <span className="overdue">Overdue:</span>
          <div className="container-btns">
            <button className="btn btn-dash">New Invoice</button>
            <button className="btn btn-dash">View All Invoices</button>
            <button className="btn btn-dash">View All Overdues</button>
          </div>
        </div>

        <div className="total-bills">
          <span>Total Bills Unpaid:</span>
          <span className="overdue">Overdue:</span>
          <div className="container-btns">
            <button className="btn btn-dash">New Bill</button>
            <button className="btn btn-dash">View All Bills</button>
            <button className="btn btn-dash">View All Overdues</button>
          </div>
        </div>
      </div>
    </div>
  );
};
