let numbersArray = document.querySelectorAll(".btn");
let display = document.querySelector("#display");

// loops through all the btn class, then adds their value into the textArea.
numbersArray.forEach(function(elem) {
  elem.addEventListener("click", () => {
    display.textContent += elem.value;
  });
});

// Clears the Display
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  display.textContent = "";
});

// Evaluates the expression
const equalsBtn = document.querySelector("#equals");

equalsBtn.addEventListener("click", () => {
  display.textContent = eval(display.value);
});

// DEL button
const delBtn = document.querySelector("#delete");

delBtn.addEventListener("click", () => {
	display.textContent = display.value.slice(0, display.value.length -1);
});
