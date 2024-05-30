let display = document.getElementById('display');
let currentNumber = '';
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function setOperator(op) {
  if (operator !== null || currentNumber === '') return;
  operator = op;
  currentNumber += ' ' + operator + ' ';
  display.value = currentNumber;
}

function calculateResult() {
  if (operator === null || currentNumber.slice(-2) === ' ') return;
  try {
    display.value = eval(currentNumber);
    currentNumber = display.value;
    operator = null;
  } catch (error) {
    alert('Invalid input');
    clearDisplay();
  }
}

function clearDisplay() {
  currentNumber = '';
  operator = null;
  display.value = '';
}