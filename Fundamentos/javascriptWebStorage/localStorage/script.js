//console.log(localStorage.length);// não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam');// salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith');// salva uma entrada com a key = 'lastname' e value = 'Smith
//console.log(localStorage.getItem('lastname'));// retorna o valor 'Smith'
localStorage.removeItem('lastname');// remove a entrada referente a key = 'lastname'
//console.log(localStorage.length);
localStorage.clear();// limpa todas as entradas salvas em localStorage
//console.log(localStorage.length);