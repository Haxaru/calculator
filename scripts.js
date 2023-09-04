const clearBtn = document.querySelector("[data-clear]");
const previousNum = document.querySelector(".prev-num");
const currentNum = document.querySelector(".curr-num");
const enterBtn = document.querySelector("[data-enter]");
const numbers = document.querySelectorAll("[data-num]");
const operatorButtons = document.querySelectorAll("[data-operator]");

let num1 = "";
let operator = "";
let num2 = "";

function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  previousNum.textContent = "";
  currentNum.textContent = "";
}

function operate(num1, operator, num2) {
  num2 = Number(currentNum.textContent);
  switch (operator) {
    case "+":
      clear();
      currentNum.textContent = num1 + num2;
      break;
    case "-":
      clear();
      currentNum.textContent = num1 - num2;
      break;
    case "*":
      clear();
      currentNum.textContent = num1 * num2;
      break;
    case "/":
      clear();
      currentNum.textContent =
        num2 === 0 ? "insert funny joke here" : num1 / num2;
      break;
    default:
      return;
  }
}

numbers.forEach((button) =>
  button.addEventListener("click", (e) => {
    currentNum.textContent += e.target.textContent;
  })
);

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    num1 = Number(currentNum.textContent);
    operator = e.target.textContent;
    previousNum.textContent = `${currentNum.textContent} ${operator}`;
    currentNum.textContent = "";
    if (previousNum.textContent === "") operate(num1, operator, num2);
  });
});

clearBtn.addEventListener("click", () => {
  clear();
  operator = "";
});
enterBtn.addEventListener("click", () => {
  operate(num1, operator, num2);
});
