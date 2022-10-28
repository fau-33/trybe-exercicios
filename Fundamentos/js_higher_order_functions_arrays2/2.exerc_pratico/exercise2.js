const data = require('./data/data');

// 🚀 Exercício 2
// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

// 1.Crie uma string com os nomes de todas as pessoas autoras.
/* const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
 */

function reduceNames() {
  return data.books.reduce((acc, curr) => {
    return `${acc} ${curr.author.name},`;
  }, '')
}
//console.log(reduceNames());


// 2.Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
//const expectedResult = 43;

function averageAge() {
  const numberOfBooks = data.books.length;
  const sumOfAges = data.books.reduce((sum, book) => 
  sum + (book.releaseYear - book.author.birthYear),0)
  return sumOfAges / numberOfBooks;
}

//console.log(averageAge());

// Encontre o livro com o maior nome.

/* const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
 */

function longestNamedBook() {
  return data.books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  });
}
//console.log(longestNamedBook());