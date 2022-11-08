// Spread Operator => pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis e também em funções que recebem múltiplos argumentos.
/* const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); */ // [1, 2, 3, 4]

// o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar.

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
//console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
//console.log(numbers); // [ 1, 2, 3 ]

// Combinação de arrays em uma unica estrutura
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
//console.log(months);

// spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

//console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

//console.log(Math.max(...randomNumbers)); // 800
//console.log(Math.min(...randomNumbers)); // 5

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };

//console.log(customer);


