'use strict'
const messageArray = [];

const textForm = document.getElementById('textForm');
// const textForm = document.forms.textForm;
const textInput = textForm.textInput;

textForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  // console.log(event.target.elements[1]);
  // console.log(event.target.elements.textInput);
  const {target: {textInput:{value: valuetextInput} }} = event;
  console.log(valuetextInput);
});



