// Exemplo 1 for / in
// o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice.

let cars = ['Saab', 'Volvo', 'BMW'];

for(let index in cars){
  //console.log(cars[index]);
}

// Exemplo 2
/* let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
}; */

for(let index in car){
  //console.log(index, car[index]);
}

// Exemplo 2 for / of
// Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  //console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let index in names){
  //console.log('Olá ' + names[index]);
}

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let index in car){
  console.log(index, car[index]);
}