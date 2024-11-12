const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

let counter = 0;

incrementButton.addEventListener('click', () => {
  counter += 1;
  counterDisplay.textContent = counter;
});
