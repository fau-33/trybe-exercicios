const data = require('./data/data');

// 🚀 Exercício 2
// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

// Crie uma string com os nomes de todas as pessoas autoras.
/* const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
 */

function reduceNames() {
  return data.books.reduce((acc, curr) => {
    return `${acc} ${curr.author.name},`;
  }, '')
}
console.log(reduceNames());


