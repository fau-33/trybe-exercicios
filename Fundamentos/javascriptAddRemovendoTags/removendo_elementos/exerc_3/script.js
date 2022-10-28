// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes;

for(let index = todosOsFilhos.length; index >= 0; index -= 1){
  const filhoAtual = todosOsFilhos[index];
  if(filhoAtual.id !== 'elementoOndeVoceEsta'){
    filhoAtual.remove();
  }
}
console.log(filhoAtual);

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
