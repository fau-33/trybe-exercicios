// Exercicios sobre funções (foguete)

/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false */

function verificaPalindrome(string){
  let reverse = string.split('').reverse().join('');
  if(reverse === string){
    return true;
  }else {
    return false;
  }

  return reverse;
}

//console.log(verificaPalindrome('arara'));
//console.log(verificaPalindrome('desenvolvimento'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(numeros){
  let maiorIndiceArray = 0
  for(let indice in numeros){
    if(numeros[maiorIndiceArray] < numeros[indice]){
        maiorIndiceArray = indice;
    }
  }
  return maiorIndiceArray;
}

//console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenor(numeros){
  let menorIndiceArray = 0
  for(let indice in numeros){
    if(numeros[menorIndiceArray] > numeros[indice]){
      menorIndiceArray = indice;
    } 
  }
  return menorIndiceArray;
}
//console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra(palavras){
  let maiorPalavra = palavras[0];
  for(let indice in palavras){
    if(maiorPalavra.length < palavras[indice].length){
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}
//console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaDeTodosNumeros(numero){
  let total = 0;
  for(let index = 0; index <= numero; numero += 1){
    total += index;
  }
  return total;
}

//console.log(somaDeTodosNumeros(5));

//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra){
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  let controle = true;

  for(let index = 0; index < fimPalavra.length; index += 1){
      if(palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]){
        controle = false;
      }
  }
  return controle;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));