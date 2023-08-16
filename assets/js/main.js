"use strict";

function countdown (){
  const number = document.getElementById("text");
// console.dir(number.innerText);
let count = 10;
const idInterval = setInterval(() => {
  count--
  number.innerText = count
  if (count <= 0) {
    number.innerText = 'counter stopped'
    clearInterval(idInterval);
  }
}, 1000);
}

countdown()