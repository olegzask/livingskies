import React, { useState } from "react";
import { useButton } from "../state/store";
import { Outlet } from "react-router-dom";
import { FaFileInvoiceDollar, FaList, FaHome } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { MdSettings, MdLogout } from "react-icons/md";
import "./navbar.styles.css";

export const NavBar = () => {
  const setBut = useButton((state) => state.setButton);
  const baton = useButton((state) => state.buttonClick);
  const [name, setName] = useState(baton);

  const newId = (event) => {
    const newName = event.target.id;
    setBut(newName);
    setName(event.target.id);
  };

  return (
    <div className="accounting-navbar-container">
      <div className="acc-inner-container">
        <span onClick={newId} id="dashboard" className="user-container">
          <FaHome className="dash-icon" /> Dashboard
        </span>

        <div className="section-container">
          <header className="header-txt">SALES</header>
          <section className="section-sales">
            <span onClick={newId} id="newinvoice" className="dash-link">
              <FaFileInvoiceDollar className="icon-navbar" /> New Invoice
            </span>
            <span onClick={newId} id="viewinvoices" className="dash-link">
              <FaList className="icon-navbar" /> View All Invoices
            </span>
            <span onClick={newId} id="reports" className="dash-link">
              <SiSimpleanalytics className="icon-navbar" /> Reports
            </span>
          </section>
        </div>

        <div className="section-container">
          <header className="header-txt">PURCHASES</header>
          <section className="section-bills">
            <span onClick={newId} id="newbill" className="dash-link">
              <FaFileInvoiceDollar className="icon-navbar" /> New Bill
            </span>
            <span onClick={newId} id="viewbills" className="dash-link">
              <FaList className="icon-navbar" /> View All Bills
            </span>
            <span onClick={newId} id="reports" className="dash-link">
              <SiSimpleanalytics className="icon-navbar" /> Reports
            </span>
          </section>
        </div>

        <div className="footer-container">
          <span className="settings">
            {" "}
            <MdSettings className="icon-navbar" /> Settings
          </span>
          <span className="logout">
            {" "}
            <MdLogout className="icon-navbar" /> Log Out
          </span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
