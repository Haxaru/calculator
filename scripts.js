const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const display = document.querySelector(".display");
const divideBtn = document.querySelector(".divide");
const enterBtn = document.querySelector(".enter");
const multiplyBtn = document.querySelector(".multiply");
const numbers = document.querySelectorAll(".num");
const subtractBtn = document.querySelector(".subtract");

let total = 0;
let num1 = "";
let operator = "";
let num2 = "";

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
function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = "";
}

function handleOperatorClick(clickedOperator) {
  num1 = Number(display.textContent);
  operator = clickedOperator;
  display.textContent = "";
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      clear();
      display.textContent = add(num1, num2);
      break;
    case "-":
      clear();
      display.textContent = subtract(num1, num2);
      break;
    case "*":
      clear();
      display.textContent = multiply(num1, num2);
      break;
    case "/":
      clear();
      display.textContent = divide(num1, num2);
      break;
  }
}

numbers.forEach((item) =>
  item.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  })
);

clearBtn.addEventListener("click", () => {
  clear();
  operator = "";
});
addBtn.addEventListener("click", () => {
  handleOperatorClick("+");
});
subtractBtn.addEventListener("click", () => {
  handleOperatorClick("-");
});
multiplyBtn.addEventListener("click", () => {
  handleOperatorClick("*");
});
divideBtn.addEventListener("click", () => {
  handleOperatorClick("/");
});

enterBtn.addEventListener("click", () => {
  num2 = Number(display.textContent);
  operate(num1, operator, num2);
});

window.addEventListener("click", () => {
  console.log(
    `num1: ${num1}, operator: ${operator}, num2: ${num2} || ${typeof num1}, ${typeof operator}, ${typeof num2}`
  );
});
