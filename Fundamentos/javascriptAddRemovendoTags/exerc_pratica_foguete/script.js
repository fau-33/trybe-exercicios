// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const elementH1 = document.createElement('h1');// criação do elemento
h1.innerText = "Exercício - JavaScript DOM ";// manipulação do elemento
document.body.appendChild(elementH1);// Adicionado no body

// Adicione a tag main com a classe main-content como filho da tag body;
const elementMain = document.createElement('main');
elementMain.className = "main-content";
document.body.appendChild(elementMain);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const elementSectionCenter = document.createElement('section');
elementSection.className = "center-content";
elementMain.appendChild(elementSectionCenter);