// Exemplo 1 array
/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); */

// Exemplo 2 

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
//console.log(searchForLastTask);
// Brincar com o cachorro

// Exemplo 3

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList);
//tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//tasksList.push('Lavar os pratos');
//tasksList.unshift('Escova os dentes');
//tasksList.pop(); // Remove o ultimo item do array
//tasksList.shift(); // Remove o primeiro item da lista
let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
