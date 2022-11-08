// Para Fixar
//Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//const dadosUser = {...user, ...jobInfos};
//console.log(dadosUser);

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
//Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const {name , age , nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

const joinObjects = `Hi , my name is ${name}, I'm ${age} years old and I'm ${nationality}.I work as a ${profession} and my squad is ${squadInitials}-${squad} `;

console.log(joinObjects);

