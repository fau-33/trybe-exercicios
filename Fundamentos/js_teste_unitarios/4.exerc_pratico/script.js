/**
 * 🚀 Exercício 1
Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals.
 */

/* const testingScope = (escopo) => {
  if(escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(false); */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = ( ) => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13
  return oddsAndEvens;
  
}
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente.`); */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);