
window.onload = function() {
  // 2 - Evento criado ao clicar no botão limpar os campos
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  // 2 - Depois ele foi chamado no evento de click através da função criada
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  // 2 - Evento de mudança de botão ao clickar no checkbox
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enabledSubmit);
}
// 1 - fez a função para o botão submit pra utilizar preventDefault
function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if(validation === false) {
    alert('Dados inválidos');
  }else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
// 1 - função criada para limpar os campos do formulário
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  for(let index = 0; index < formElements.length; index += 1){
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}
// 1 - Função para habilitar o botão ao clicar no checked
function enabledSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}
// Função para validação de campos do formulário
function textInputValidation() {
  const name = document.querySelector('#fullname').value.length;
  const invalidName = name < 10 || name > 40;

  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const reason = document.querySelector('why').value.length;
  const invalidReason = reason > 500;

  if(invalidName || invalidEmail || invalidReason) {
    return false;
  } else {
    return true;
  }
}