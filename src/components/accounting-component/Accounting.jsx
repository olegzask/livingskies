import React from "react";
import { useButton } from "./state/store";
import "./accounting.styles.css";
import { NavBar } from "./accounting-sub-components/NavBar";
import { Dashboard } from "./accounting-sub-components/Dashboard";
import { InvoiceNew } from "./accounting-sub-components/InvoiceNew";
import { Reports } from "./accounting-sub-components/Reports";
import { ViewInvoices } from "./accounting-sub-components/ViewInvoices";
import { BillNew } from "./accounting-sub-components/BillNew";
import { ViewBills } from "./accounting-sub-components/ViewBills";

export const Accounting = () => {
  const curButton = useButton((state) => state.buttonClick);

  const deciderFunc = () => {
    if (curButton === "dashboard" || curButton === "") return <Dashboard />;
    if (curButton === "newinvoice") return <InvoiceNew />;
    if (curButton === "viewinvoices") return <ViewInvoices />;
    if (curButton === "reports") return <Reports />;
    if (curButton === "newbill") return <BillNew />;
    if (curButton === "viewbills") return <ViewBills />;
  };

  return (
    <div className="accounting-main-container">
      <NavBar />
      {deciderFunc()}
    </div>
  );
};
