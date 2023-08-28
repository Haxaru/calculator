let num1, operator, num2;

const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const display = document.querySelector(".display");
const divideBtn = document.querySelector(".divide");
const enterBtn = document.querySelector(".enter");
const multiplyBtn = document.querySelector(".multiply");
const numbers = document.querySelector(".numbers");
const subtractBtn = document.querySelector(".subtract");

const displayValue = display.textContent;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

numbers.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
  operator = undefined;
});
addBtn.addEventListener("click", () => (operator = "+"));
subtractBtn.addEventListener("click", () => (operator = "-"));
multiplyBtn.addEventListener("click", () => (operator = "*"));
divideBtn.addEventListener("click", () => (operator = "/"));
