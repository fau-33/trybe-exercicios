// Exemplo logico 1
const comida = 'pão na chapa';
const bebida = 'leite';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
// Exemplo logico 2
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

// Exemplo 3
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

// Exemplo 4
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false