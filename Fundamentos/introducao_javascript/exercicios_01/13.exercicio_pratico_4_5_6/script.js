// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. - 4

const number = 5;

/* if(number > 0){
  console.log('Esse numero é ' + number + ' positivo');
}else if(number < 0){
  console.log('Esse numero é ' + number + ' negativo');
}else {
  console.log('zero');
} */


// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. - 5
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 50;
const angulo2 = 100;
const angulo3 = 30;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let somaDosAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

/* if(somaDosAngulosPositivos){
  if(somaDosAngulos === 180){
    console.log('True');
  }else {
    console.log('False');
  }
}else {
  console.log('Erro! ângulo inválido');
} */

/*
  Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

  Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). - 6

  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

  Exemplo: bishop (bispo) -> diagonals (diagonais)
 */

  const pecaXadrez = 'rainha';

  switch(pecaXadrez.toLowerCase()){
    case 'bispo':
      console.log(' (bispo) -> diagonals (diagonais)');
      break;
    case 'rei':
      console.log('Rei-> Uma casa apenas para qualquer direção.');
      break;
    case 'rainha':
      console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peao':
      console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
      break;
    default:
      console.log('ERRO! Peça inválida!');            
  }