// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai'); // recupere o elemento id pai
const irmaoElementoOndeVoceEsta = document.createElement('section'); // crie um novo elemento
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`

// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); // recuperar o elemento id
const filhoElementoOndeVoceEsta = document.createElement('section'); // criando o novo elemento
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // Adiciona o elemento criado como filho com id 
console.log(filhoElementoOndeVoceEsta);


