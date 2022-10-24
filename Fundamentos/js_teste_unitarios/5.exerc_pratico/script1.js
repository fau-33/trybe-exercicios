/**
 * 🚀 Exercício 4
Crie duas funções JavaScript com as seguintes especificações:

Não se esqueça de usar template literals

Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;
A função deverá receber um nome por parâmetro;
Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
Exemplo:

Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’
Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.
 */
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split('');
  for(let index = 0; index < fraseArray.length; index += 1) {
    if(fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }
  return fraseArray.join('');
}
console.log(substituaX('Bebeto'));  