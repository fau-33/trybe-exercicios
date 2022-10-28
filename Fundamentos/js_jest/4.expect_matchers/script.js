// toBe é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string “5” não é igual ao número 5.
//expect(5).toBe("5");// falharia

// Javascript Nos tipos primitivos a atribuição ocorre por valor, ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez que o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:
let gemeoUm = "Cabelo comprido";
let gemeoDois = gemeoUm;

gemeoUm = "Careca";

/* console.log(gemeoUm); // Careca
console.log(gemeoDois); */ // Cabelo comprido

// objetos

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

/* console.log(myName.firstName); // Carol
console.log(identity.firstName); */ // Carol

//  Para testar a igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
test('Igualdade de array e object', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

// Exceções
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});

// not
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

// O bloco describe
//A função describe cria um bloco para agrupar vários testes. Isso é útil para melhorar a organização dos seus testes. Você pode utilizar describe, por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. 