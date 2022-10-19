// crie um algoritmo que imprima na tela o fatorial de 10

let fatorial = 1;


for(let indexFatorial = 10; indexFatorial > 0; indexFatorial -= 1){
  fatorial *= indexFatorial;
}
//console.log(fatorial);

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'trybe';
let invertida = word.split("").reverse().join("");
//console.log(invertida);

/* Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

for(let index = 0; index < array.length; index += 1){
  if(array[index] > maiorPalavra){
    maiorPalavra = array[index];
  }
}
//console.log(maiorPalavra);

/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. */

let maiorNumeroPrimo = 0;

for(let numeroCorrente = 2; numeroCorrente <= 50; numeroCorrente += 1){
  let ePrimo = true;
  for(let numeroDivisor = 2; numeroDivisor < numeroCorrente; numeroDivisor += 1){
   if(numeroCorrente % numeroDivisor === 0){
    ePrimo = false;
   }   
  }
  if(ePrimo){
    maiorNumeroPrimo = numeroCorrente;
  }
}

console.log(maiorNumeroPrimo);