/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()

      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

/* 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
function changeText(){
  const p = document.getElementsByTagName('p')[1];
  p.innerText = "Ganhando um sálario de 3 mil";

}
changeText();

/* 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). */
function changeBackgroundColorGreen(){
  const mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor = "rgb(76,164,109)";
}
changeBackgroundColorGreen();

//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function changeColorRedSquareWhite(){
 const centerContent =  document.getElementsByClassName('center-content')[0];
 centerContent.style.backgroundColor = "white";
}
changeColorRedSquareWhite();

//4. Crie e execute uma função que corrija o texto da tag <h1>.
function titleCorrection(){
 const title = document.getElementsByClassName('title')[0];
 title.innerText = "Exercício - Javascript";
}
titleCorrection();

//5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
function changeTextToUppercase(){
  const p = document.getElementsByTagName('p')[0];
  p.style.textTransform = "uppercase";
}
changeTextToUppercase();