// Exemplo logico com OU

const bebidaPrincipal =  'refrigerante';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

// Exemplo logico 2
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false