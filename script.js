let display = document.getElementById('display');
let popup = document.getElementById('popup');
let equalCount = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const result = eval(display.value);
  display.value = result;
  equalCount++;

  if (equalCount === 3) {
    popup.style.display = 'block';
    equalCount = 0;
  }
}

function closePopup() {
  popup.style.display = 'none';
  window.location.href = 'https://drink.primemath.lol'; // Replace with your desired URL
}
