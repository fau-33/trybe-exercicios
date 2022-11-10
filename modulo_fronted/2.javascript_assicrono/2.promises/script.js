// Construindo uma promise
/* Se quisermos criar nossas próprias promises podemos usar o construtor new Promise() para criar uma nova promise. Esse construtor recebe uma função como parâmetro e essa função deverá ter dois argumentos: a função resolve e a função reject. */
//new Promise((resolve, reject) => {});

// Retornando valores quando a promise é resolvida
// Função que gera um número aleatório
const generateNumberRandom = () => Math.round(Math.random() * 10);

/* const promiseResolved = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateNumberRandom();
    resolve(randomNumber);
  }, 1000);
});
console.log(generateNumberRandom())
console.log(promiseResolved()) */

const rejectedPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateNumberRandom();
    reject(new Error(`O número ${randomNumber} é inválido`));
  }, 1000);
});

//console.log(generateNumberRandom())
//console.log(rejectedPromise())