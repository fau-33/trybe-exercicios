
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
/* for(let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
    console.log(numbers[indexNumber]);
} */
// Some todos os valores contidos no array e imprima o resultado;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
  sum += numbers[index];
} */
//console.log(sum);

/* Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum1 = 0
for(let index = 0; index < numbers.length; index += 1){
  sum1 += numbers[index];
}
let media = sum1 / numbers.length;
console.log(media); */

/* Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum1 = 0
for(let index = 0; index < numbers.length; index += 1){
  sum1 += numbers[index];
}
 sum1 = sum1 / numbers.length;

if(sum1 > 20){
  console.log('valor maior que 20');
}else {
  console.log('valor menor ou igual a 20');
} */

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > maiorNumero){
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero); */

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//let numeroImpares = 0;

/* for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    console.log(numbers[index]);;
  }
} */

/* if(numbers === 0){
  console.log("Nenhum valor impar encontrado");
}else {
  console.log(numbers);
} */

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < menorNumero){
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);  */

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

/* let numeros = [];

for(let index = 1; index <= 25; index += 1){
  numeros.push(index);
  
}
console.log(numeros);
 */
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numeros = [];

for(let index = 1; index < numeros.length; index += 1){
  console.log(numeros[index] / 2);  
} 

// Exercicio bonus bubble sort

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
