import React, { useState } from "react";
import { ReportWindow } from "./ReportWindow";
import "./reports.styles.css";

export const Reports = () => {
  const [clicked, setClicked] = useState(false);

  const clickReport = () => {
    !clicked ? setClicked(true) : setClicked(false);
  };

  return (
    <div className="reports-main-container">
      <header className="reports-header">Business Reports</header>
      {clicked ? <ReportWindow /> : null}
      <div className="allreps">
        <div className="report-container sales-reports-container">
          <header className="header-rep">SALES</header>
          <span onClick={clickReport} className="rep-btn">
            TOTAL SALES
          </span>
          <span onClick={clickReport} className="rep-btn">
            LAST 30 DAYS
          </span>
          <span onClick={clickReport} className="rep-btn">
            TOTAL THIS YEAR
          </span>
          <span onClick={clickReport} className="rep-btn">
            CUSTOM REPORT
          </span>
        </div>

        <div className="report-container bills-reports-container">
          <header className="header-rep">BILLS</header>
          <span onClick={clickReport} className="rep-btn">
            TOTAL SPENT
          </span>
          <span onClick={clickReport} className="rep-btn">
            LAST 30 DAYS
          </span>
          <span onClick={clickReport} className="rep-btn">
            TOTAL THIS YEAR
          </span>
          <span onClick={clickReport} className="rep-btn">
            CUSTOM REPORT
          </span>
        </div>

        <div className="report-container taxes-reports-container">
          <header className="header-rep">TAXES</header>
          <span onClick={clickReport} className="rep-btn">
            TOTAL COLLECTED
          </span>
          <span onClick={clickReport} className="rep-btn">
            TOTAL GST/HST COLLECTED
          </span>
          <span onClick={clickReport} className="rep-btn">
            CUSTOM GST/HST REPORT
          </span>
          <span onClick={clickReport} className="rep-btn">
            CUSTOM PST REPORT
          </span>
        </div>

        <div className="report-container payroll-reports-container">
          <header className="header-rep">PAYROLL</header>
          <span onClick={clickReport} className="rep-btn">
            TOTAL PAID OUT
          </span>
          <span onClick={clickReport} className="rep-btn">
            TOTAL DEDUCTABLES PAID
          </span>
          <span onClick={clickReport} className="rep-btn">
            CUSTOM PAYROLL REPORT
          </span>
        </div>
      </div>
      <span className="cashflow-reports">
        Current Cashflow (Excluding collected taxes):
      </span>
    </div>
  );
};
