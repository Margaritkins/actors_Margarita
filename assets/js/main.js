"use strict";
const messageArray = [];

const textForm = document.getElementById("textForm");
const messages = document.getElementById("messages");

textForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    target: {
      textInput: { value: valuetextInput },
    },
  } = event;

  const prepareValue = valuetextInput.trim();
  if (prepareValue && !messageArray.includes(prepareValue)) {
    event.target.textInput.style.backgroundColor = "";
    messageArray.push(prepareValue);
    const pMessage = createElement(
      "p",
      {},
      document.createTextNode(prepareValue)
    );
    messages.append(pMessage);
    console.log(messageArray);
    textForm.reset();
  } else {
    event.target.textInput.style.backgroundColor = "pink";
  }
});

// const user = "Петренко А. О";

// const checkUserPattern = /[А-Я][а-я]*/;
// console.log(checkUserPattern);
