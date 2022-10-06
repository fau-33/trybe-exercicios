// Exemplo de objeto 1

/* Objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array. */

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

// Exemplo 2

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sabado',
}

//console.log(diasDaSemana['3']);

// Exemplo 3

let conta = {
  agencia: '0000',
  banco: {
    cod: '042',
    id: 4,
    nome: 'trybeBank'
  }
}

let infoDoBanco = 'banco';
/* console.log(conta[infoDoBanco]);
console.log(conta[infoDoBanco]['nome']);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod);
console.log(conta['banco']['cod']); */

// Exemplo 3
let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

/* console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); */ // Nova Iorque

// Exemplo 4 Arrays com objetos

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

/* let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']);  */// 10

/* let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); */ // Zoey

// Exercicio de fixação
// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let player = {
 name:'Martha',
 lastName: 'Silva',
 age: 34,
 medals: {
  golden: 2,
  silver: 3
 }
}

console.log(player.name);
console.log(player['medals']['golden']);