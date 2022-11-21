import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const InvoiceDetails = ({ info }) => {
  const { id, serviceType, quantity, price, description, totalPrice } = info;

  return (
    <div className="invoice-details listed-items">
      <div className="service">
        <h2 className="details-headers">Service</h2>
        <span>{serviceType}</span>
      </div>
      <div className="quantity">
        <h2 className="details-headers">QTY</h2>
        <span>{quantity}</span>
      </div>
      <div className="description txt-des">
        <h2 className="details-headers">DESCRIPTION</h2>
        <textarea readOnly className="descr-txt" value={description}></textarea>
      </div>
      <div className="unit-cost">
        <h2 className="details-headers">UNIT COST</h2>
        <span>{price}</span>
      </div>
      <div className="total">
        <h2 className="details-headers">TOTAL</h2>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
};
