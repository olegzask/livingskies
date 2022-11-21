import React, { useState } from "react";
import { InvoiceDetails } from "./InvoiceDetails";
import { ErrorWindow } from "./ErrorWindow";
import { services } from "../../service-card-component/services";
import { tstFunc } from "./handlers";
import { HiDocumentAdd } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import "./invoice.styles.css";

export const InvoiceNew = () => {
  const [invoice, setInvoice] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [wholesale, setWholesale] = useState(false);
  const [shippingSameAddress, setShippingSameAddress] = useState(false);

  const sameShipping = () => {
    const shipCheckbox = document.getElementById("shipping-same");
    setShippingSameAddress(!shipCheckbox.checked ? false : true);
    tstFunc(shippingSameAddress);
  };

  const resetFields = () => {
    const shipCheckbox = document.getElementById("shipping-same");
    const date = document.getElementById("date-invoice");
    const customerNameBilling = document.getElementById("customername");
    const customerAddressBilling = document.getElementById("customeraddress");
    const customerPhoneBilling = document.getElementById("customerphone");
    const customerEmailBilling = document.getElementById("customeremail");

    const customerNameShipping = document.getElementById(
      "customername-shipping"
    );
    const customerAddressShipping = document.getElementById(
      "customeraddress-shipping"
    );
    const customerPhoneShipping = document.getElementById(
      "customerphone-shipping"
    );
    const customerEmailShipping = document.getElementById(
      "customeremail-shipping"
    );

    customerNameBilling.value = "";
    customerAddressBilling.value = "";
    customerPhoneBilling.value = "";
    customerEmailBilling.value = "";
    customerNameShipping.value = "";
    customerAddressShipping.value = "";
    customerPhoneShipping.value = "";
    customerEmailShipping.value = "";
    setShippingSameAddress(false);
    shipCheckbox.checked = false;
    tstFunc(true);
    setItemList([]);
  };

  const addInvoice = () => {
    const errWindow = document.getElementById("err-wdw");
    const date = document.getElementById("date-invoice").value;
    const customerNameBilling = document.getElementById("customername").value;
    const customerAddressBilling =
      document.getElementById("customeraddress").value;
    const customerPhoneBilling = document.getElementById("customerphone").value;
    const customerEmailBilling = document.getElementById("customeremail").value;

    const customerNameShipping = document.getElementById(
      "customername-shipping"
    ).value;
    const customerAddressShipping = document.getElementById(
      "customeraddress-shipping"
    ).value;
    const customerPhoneShipping = document.getElementById(
      "customerphone-shipping"
    ).value;
    const customerEmailShipping = document.getElementById(
      "customeremail-shipping"
    ).value;

    const handleError = () => {
      const list = [];
      const errWindow = document.getElementById("err-wdw");

      if (shippingSameAddress) {
        if (!date) list.push("Date");
        if (!customerNameBilling) list.push("Customer's billing name");
        if (!customerAddressBilling) list.push("Customer's billing address");
        if (!customerPhoneBilling) list.push("Customer's billing phone number");
        if (!customerEmailBilling) list.push("Customer's billing email");
        if (itemList.length < 1) list.push("Billed service");
        errWindow.classList.add("error-active");
        setErrorList(list);
        list.length > 0
          ? errWindow.classList.add("error-active")
          : errWindow.classList.remove("error-active");
        return list;
      }

      if (!shippingSameAddress) {
        if (!date) list.push("Date");
        if (!customerNameBilling) list.push("Customer's billing name");
        if (!customerAddressBilling) list.push("Customer's billing address");
        if (!customerPhoneBilling) list.push("Customer's billing phone number");
        if (!customerEmailBilling) list.push("Customer's billing email");
        if (itemList.length < 1) list.push("Billed service");
        if (!customerNameShipping && !shippingSameAddress)
          list.push("Customer's shipping name");
        if (!customerAddressShipping && !shippingSameAddress)
          list.push("Customer's shipping address");
        if (!customerPhoneShipping && !shippingSameAddress)
          list.push("Customer's shipping phone number");
        if (!customerEmailShipping && !shippingSameAddress)
          list.push("Customer's shipping email");
        setErrorList(list);
        list.length > 0
          ? errWindow.classList.add("error-active")
          : errWindow.classList.remove("error-active");
        return list;
      }
    };

    if (shippingSameAddress) {
      if (
        date &&
        customerAddressBilling &&
        customerAddressBilling &&
        customerEmailBilling &&
        customerPhoneBilling &&
        itemList.length > 0
      ) {
        const newInv = {
          invoiceNumber: 1,
          date: date,
          id: Math.round(Math.random() * 89),
          customer: {
            name: customerNameBilling,
            billingAddress: {
              name: customerNameBilling,
              address: customerAddressBilling,
              phone: customerPhoneBilling,
              email: customerEmailBilling,
            },
            shippingAddress: {
              name: shippingSameAddress
                ? customerNameBilling
                : customerNameShipping,
              address: shippingSameAddress
                ? customerAddressBilling
                : customerAddressShipping,
              phone: shippingSameAddress
                ? customerPhoneBilling
                : customerPhoneShipping,
              email: shippingSameAddress
                ? customerEmailBilling
                : customerEmailShipping,
            },
          },
          items: itemList,
          taxes: {
            gst: +gst.toFixed(2),
            pst: !wholesale ? +pst.toFixed(2) : 0,
          },
          totalWithTaxes: !wholesale
            ? +totalAfterTax
            : +(totalAfterTax - Number(pst)).toFixed(2),
        };
        setInvoice([...invoice, newInv]);
        errWindow.classList.remove("error-active");
        resetFields();
      }
    } else
      handleError().map((el) => console.log(`${el} is missing, please fix!`));
    if (!shippingSameAddress) {
      if (
        date &&
        customerNameBilling &&
        customerAddressBilling &&
        customerEmailBilling &&
        customerPhoneBilling &&
        customerAddressShipping &&
        customerNameShipping &&
        customerEmailShipping &&
        customerPhoneShipping &&
        itemList.length > 0
      ) {
        const newInv = {
          invoiceNumber: 1,
          date: date,
          id: Math.round(Math.random() * 89),
          customer: {
            name: customerNameBilling,
            billingAddress: {
              name: customerNameBilling,
              address: customerAddressBilling,
              phone: customerPhoneBilling,
              email: customerEmailBilling,
            },
            shippingAddress: {
              name: shippingSameAddress
                ? customerNameBilling
                : customerNameShipping,
              address: shippingSameAddress
                ? customerAddressBilling
                : customerAddressShipping,
              phone: shippingSameAddress
                ? customerPhoneBilling
                : customerPhoneShipping,
              email: shippingSameAddress
                ? customerEmailBilling
                : customerEmailShipping,
            },
          },
          items: itemList,
          taxes: {
            gst: +gst.toFixed(2),
            pst: !wholesale ? +pst.toFixed(2) : 0,
          },
          totalWithTaxes: !wholesale
            ? +totalAfterTax
            : +(totalAfterTax - Number(pst)).toFixed(2),
        };
        setInvoice([...invoice, newInv]);
        resetFields();
      }
    } else
      handleError().map((el) => console.log(`${el} is missing, please fix!`));
  };

  const wholesaleCheck = () => {
    const box = document.getElementById("wholesale");
    !box.checked ? setWholesale(false) : setWholesale(true);
  };

  const grandTotal = itemList
    .map((item) => +item.totalPrice)
    .reduce((prevVal, curVal) => prevVal + curVal, 0);

  const gst = +((grandTotal / 100) * 5);
  const pst = +((grandTotal / 100) * 6);
  const totalAfterTax = (grandTotal + gst + pst).toFixed(2);

  const addItem = () => {
    const qty = +document.getElementById("qty-inp").value;
    const descript = document.getElementById("des-inp").value;
    const cost = +document.getElementById("cost-inp").value;
    const serviceOpt = document.getElementById("serv").value;

    const errorHandler = () => {
      const list = [];
      if (!qty) list.push("Quantity");
      if (!descript) list.push("Description");
      if (!cost) list.push("Price");

      return list;
    };

    if (qty > 0 && descript && cost > 0 && serviceOpt) {
      setItemList([
        ...itemList,
        {
          id: itemList.length,
          serviceType: serviceOpt,
          quantity: qty,
          pricePerUnit: cost,
          description: descript,
          totalPrice: +(qty * cost).toFixed(2),
        },
      ]);
      document.getElementById("qty-inp").value = "";
      document.getElementById("des-inp").value = "";
      document.getElementById("cost-inp").value = "";
      document.getElementById("serv").selectedIndex = 0;
    } else errorHandler().map((el) => console.log(`${el} is missing!`));
  };

  const deleteItem = (event) => {
    const itemToDelete = event.target.closest(".item-div").id;
    const filteredList = itemList.filter((item, id) => id !== +itemToDelete);
    setItemList(filteredList);
  };

  return (
    <div className="invoice-container">
      <div className="invoice-top">
        <ErrorWindow list={errorList} />
        <h2 className="invoice-hdr">New Invoice</h2>
        <h2 className="invoice-bus">
          Living Skies Window Tint 160C 16th Street West, Prince Albert, SK, S6V
          3V3
        </h2>
      </div>

      <div className="date-number">
        <section className="wholesale-retail">
          <label>Wholesale Customer (PST Exempt)</label>
          <input onChange={wholesaleCheck} id="wholesale" type="checkbox" />
        </section>
        <span className="invoice-number">Invoice Date</span>
        <input type="date" id="date-invoice" />
      </div>
      <div className="billto">
        <h2 className="bill bill-1">BILL TO</h2>
        <h2 className="bill bill-2">SHIP TO</h2>
        <section className="shipping-same">
          <label className="sameas">Same as Billing Address?</label>
          {<input onChange={sameShipping} id="shipping-same" type="checkbox" />}
        </section>
      </div>

      <div className="addys">
        <div className="billing">
          <input
            className="invoice-input"
            type="text"
            id="customername"
            placeholder="Customer Name"
          />
          <input
            className="invoice-input"
            type="text"
            id="customeraddress"
            placeholder="Address"
          />
          <input
            className="invoice-input"
            type="text"
            id="customerphone"
            placeholder="Phone Number"
          />
          <input
            className="invoice-input"
            type="email"
            id="customeremail"
            placeholder="Email"
          />
        </div>

        <div className="shipping">
          <input
            className="invoice-input"
            type="text"
            id="customername-shipping"
            placeholder="Customer Name"
          />
          <input
            className="invoice-input"
            type="text"
            id="customeraddress-shipping"
            placeholder="Address"
          />
          <input
            className="invoice-input"
            type="text"
            id="customerphone-shipping"
            placeholder="Phone Number"
          />
          <input
            className="invoice-input"
            type="email"
            id="customeremail-shipping"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="invoice-details">
        <HiDocumentAdd onClick={addItem} className="new-item" />
        <div className="service-type">
          <select className="invoice-input" name="services" id="serv">
            <option id="default-option" value="miscellaneous">
              Service
            </option>
            {services.map((service, id) => {
              return (
                <option key={id} value={service.serviceName.toLowerCase()}>
                  {service.serviceName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="quantity">
          <h2 className="details-headers">QTY</h2>
          <input
            id="qty-inp"
            className="details-input input-qty"
            type="number"
            placeholder="How Many"
          />
        </div>
        <div className="description">
          <h2 className="details-headers">DESCRIPTION</h2>
          <input
            id="des-inp"
            className="details-input"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="unit-cost">
          <h2 className="details-headers">UNIT COST</h2>
          <input
            id="cost-inp"
            className="details-input"
            type="number"
            placeholder="Price per"
          />
        </div>
      </div>
      <div className="items-list">
        {itemList.map((item, id) => {
          return (
            <div key={`${id}-item`} id={id} className="item-div">
              <InvoiceDetails info={item} />
              <MdDeleteForever onClick={deleteItem} className="delete-btn" />
            </div>
          );
        })}
      </div>
      <div className="taxes-total">
        <span>PST: ${!wholesale ? pst.toFixed(2) : 0}</span>
        <span>GST/HST: ${gst.toFixed(2)}</span>
        <span>
          GRAND TOTAL: $
          {!wholesale ? totalAfterTax : (grandTotal + gst).toFixed(2)}
        </span>
        <button onClick={addInvoice} className="create-invoice-btn">
          CREATE INVOICE
        </button>
      </div>
    </div>
  );
};
