/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function adicao(a , b){
  return a + b;
}
//console.log(1 + 4);

function subtracao(a, b){
  return a - b;
}
//console.log(10 - 3);

function multiplicacao(a, b){
  return a * b;
}
//console.log(3 * 10);

function divisao(a, b){
  return a / b;
}
//console.log(20 / 2);

function modulo(a, b){
  return a % b;
}
//console.log(10 % 2);

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

/* function maiorNumero(num1, num2){
  if(num1 > num2){
    console.log('Numero 1 é maior: ' + num1);
  }else {
    console.log('Numero 2 é maior: ' + num2);
  }
  return num1, num2;
}
maiorNumero(1, 3); */

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

/* function maiorDeTresNumeros(numA, numB, numC){
  if(numA > numB && numA > numC){
    console.log('O numero a é maior ' + numA);
  }else if(numB > numC && numB > numA){
    console.log('O numero b é maior ' + numB);
  }else {
    console.log('O numer c é maior ' + numC);
  }
}

maiorDeTresNumeros(1,3,10); */

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/* function numero(number){
  if(number > 0){
    console.log('O numero é positivo ' + number);
  }else if(number < 0){
    console.log('O numero é negativo ' + number);
  }else {
    console.log('O numero não é nem negatico e nem positivo ' + number);
  }
  return number;
}

numero(0); */

/* Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

function somaDosAngulosInternos(angulo1, angulo2, angulo3, total){
   total = angulo1 + angulo2 + angulo3;
  if(total >= 180){
    console.log('True');
  }else {
    console.log('Erro! Ângulos inválidos');
  }
  return total;
}
somaDosAngulosInternos(100, 50, 0);