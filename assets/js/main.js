"use strict";
const usersArray = [];

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
  if (checkUserPattern.test(prepareValue) && !usersArray.includes(prepareValue)) {
    event.target.textInput.style.backgroundColor = "";
    usersArray.push(prepareValue);
    const pMessage = createElement(
      "p",
      {},
      document.createTextNode(prepareValue)
    );
    messages.append(pMessage);
    console.log(usersArray);
    textForm.reset();
  } else {
    event.target.textInput.style.backgroundColor = "pink";
  }
});

const user = "Петренко А.О";

// const checkUserPattern = /^[А-Я][а-я]* [А-Я]\. [А-Я]\.$/;
const checkUserPattern = /^[А-Я][а-я]* ([А-Я]\.){2}$/g;
console.log(usersArray);
