// Object Destructuring
/* const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
}; */
//console.log(product.name);

//const { name, seller } = product;
//console.log(name); // Smart TV Crystal UHD
//console.log(seller); // Casas de Minas

// definindo o objeto
/* const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};
 */
// desestruturando o objeto:
//const {name, age, homeWorld: {name: planetName}, description: {jedi} } = character;

// imprimindo os valores:
//console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const {workDays, weekend} = daysOfWeek;
//console.log(workDays);// ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//console.log(weekend);// ['Saturday', 'Sunday']

const weekDays = [...workDays, ...weekend];
//console.log(weekDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
// { propriedade:nomeVariável } = objeto
const {a: name, b: classAssigned, c: subject} = student;
/* console.log(name);
console.log(classAssigned);
console.log(subject);
 */

// Por fim, uma outra situação em que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

