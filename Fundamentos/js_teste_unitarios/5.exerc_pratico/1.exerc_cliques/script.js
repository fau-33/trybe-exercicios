let clickCount = 0;
const textDisplay = document.getElementById('text');
const buttonTeste = document.getElementById('button_test');

buttonTeste.addEventListener('click', () => textDisplay.innerHTML = clickCount += 1);