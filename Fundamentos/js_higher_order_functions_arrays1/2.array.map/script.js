// Array.map
// O método map executa a função recebida por parâmetro para cada elemento de um array e retorna o resultado em um novo array, sem modificar o original.
// usando o for
/* const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
 */
//console.log(fullNames);

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

//console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que é preciso transformar todos os números em negativos e passá-los para um array novo.

/* const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number)); */

//console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
//console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Como o for

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}

//console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
//console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
//console.log(listProducts);

// Qual a diferença, afinal, de map para forEach? São duas principais:

/* A função map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

A função forEach não tem tal restrição. Ela pode modificar o array original e retornar nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.
 */
const numeros = [1, 2, 3, 4, 5, 6];
//console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
//console.log(paresMenoresQueCinco); // Retorno: [2, 4]
