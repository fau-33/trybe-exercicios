/* Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: - 7
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 90;

/* if(nota < 0 || nota > 100){
  console.log('Erro! Nota inválida')
}else if(nota >= 90){
  console.log('conceito A');
}else if(nota >= 80){
  console.log('conceito B'); 
}else if(nota >= 70){
  console.log('conceito C');
}else if(nota >= 60){
  console.log('conceito D');
}else if(nota >= 50){
  console.log('conceito E');
}else{
  console.log('Conceito F')
} 
 */

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false. - 8

const number1 = 5;
const number2 = 3;
const number3 = 1;

let valor = false;

if((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)){
  valor = true;
}

//console.log(valor);

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false. - 9
// Bonus: use somente um if.


const numberA = 2;
const numberB = 4;
const numberC = 6;

let valorBool = false;

if((numberA % 2 !== 0 || numberB % 2 !== 0 || numberC % 2 !== 0)){
  valorBool = true;
}

console.log(valorBool);