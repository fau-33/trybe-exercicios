import { nanoid } from 'nanoid';

const passwordBtnElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnElement.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordElement.innerHTML = randomPassword;
});