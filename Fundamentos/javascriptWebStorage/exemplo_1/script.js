// Exemplo com Local Storage
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDom(){
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.lenght - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}
