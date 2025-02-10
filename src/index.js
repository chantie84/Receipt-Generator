function generateReceipt(event) {
  event.preventDefault();

  new Typewriter("#pistachio-receipt", {
    strings: "The pistachio receipt...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let receiptFormElement = document.querySelector("#receipt-generator-form");
receiptFormElement.addEventListener("submit", generateReceipt);
