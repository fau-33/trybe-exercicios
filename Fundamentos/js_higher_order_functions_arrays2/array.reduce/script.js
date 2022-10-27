// Array.reduce
/* reduce é diferente das outras HOFs: ele recebe dois parâmetros sendo o primeiro uma callback e o segundo um valor inicial, que é opcional. Como o próprio nome diz o reduce busca reduzir um array. Isto é, iterando em elementos de um array, ao final ele gera um valor único de qualquer tipo, como, por exemplo, a soma de todos os elementos de tal array. Como principais vantagens do uso do método reduce podemos destacar:

escrita de código mais limpo;
maior facilidade ao implementar a lógica com a qual se quer trabalhar;
melhor manutenção de código.
Veja abaixo a estrutura completa do reduce: */
//reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )
