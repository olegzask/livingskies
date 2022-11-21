export const tstFunc = (state) => {
  const customerNameShipping = document.getElementById("customername-shipping");
  const customerAddressShipping = document.getElementById(
    "customeraddress-shipping"
  );
  const customerPhoneShipping = document.getElementById(
    "customerphone-shipping"
  );
  const customerEmailShipping = document.getElementById(
    "customeremail-shipping"
  );

  if (!state) {
    customerAddressShipping.disabled = true;
    customerNameShipping.disabled = true;
    customerPhoneShipping.disabled = true;
    customerEmailShipping.disabled = true;

    customerAddressShipping.style.backgroundColor = "lightgrey";
    customerNameShipping.style.backgroundColor = "lightgrey";
    customerPhoneShipping.style.backgroundColor = "lightgrey";
    customerEmailShipping.style.backgroundColor = "lightgrey";

    customerAddressShipping.value = "";
    customerNameShipping.value = "";
    customerPhoneShipping.value = "";
    customerEmailShipping.value = "";
  }

  if (state) {
    customerAddressShipping.disabled = false;
    customerNameShipping.disabled = false;
    customerPhoneShipping.disabled = false;
    customerEmailShipping.disabled = false;

    customerAddressShipping.style.backgroundColor = "white";
    customerNameShipping.style.backgroundColor = "white";
    customerPhoneShipping.style.backgroundColor = "white";
    customerEmailShipping.style.backgroundColor = "white";
  }
};
