// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const elementH1 = document.createElement('h1');// criação do elemento
elementH1.innerText = "Exercício - JavaScript DOM ";// manipulação do elemento
document.body.appendChild(elementH1);// Adicionado no body

// Adicione a tag main com a classe main-content como filho da tag body;
const elementMain = document.createElement('main');
elementMain.className = "main-content";
document.body.appendChild(elementMain);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = "center-content";
elementMain.appendChild(elementSectionCenter);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const elementP = document.createElement('p');
elementP.innerText = "xablau";
elementSectionCenter.appendChild(elementP);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const elementSectionRight = document.createElement('section');
elementSectionRight.className = "right-content";
elementMain.appendChild(elementSectionRight);