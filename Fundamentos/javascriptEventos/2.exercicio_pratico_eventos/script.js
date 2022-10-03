function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* Parte 1

Crie um calendário dinamicamente.

O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

A tag <ul> deve conter o id 'days'
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> */

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
  let getDayList = document.querySelector('#days');
  for(let index = 0; index < decemberDaysList.length; index += 1){
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    if(day === 24 || day === 31){
      dayItem.className = "holiday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else if(day === 4 || day === 11 || day === 18){
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else if(day === 25){
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

/* Parte 2

Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
 */
function createHolidayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.querySelector('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');

/* Parte 3

Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
 */
function displayHoliday(){
  let getHolidayButton = document.querySelector('#btn-holiday');// Botão "Feriados"
  let getHolidays = document.querySelectorAll('.holiday');// Seleciona todos os feriados como array de elementos
  let backgroundColor = 'rgb(238,238,238';// Armazena a cor da configuração inicial
  let setNewColor = 'white'; // armazena a nova cor que será utilizada ao pressionar o botão.

  getHolidayButton.addEventListener('click', function(){
    for(let index = 0; index < getHolidays.length; index += 1){
      if(getHolidays[index].style.backgroundColor === setNewColor ){
        getHolidays[index].style.backgroundColor === backgroundColor;
      }else {
        getHolidays[index].style.backgroundColor === setNewColor;
      }
    }
  })
}
displayHoliday();

/* Parte 4

Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
Sua função deve receber como parâmetro a string “Sexta-feira”;
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
 */
function createFridayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');// Armazena o container de botões
  let newButton = document.createElement('button');// Cria o botão
  let newButtonID = 'btn-friday';//Armazena o ID do botão

  newButton.innerHTML = buttonName;//Adiciona o nome do botão
  newButton.id = newButtonID;//Adiciona o ID ao botão
  buttonContainer.appendChild(newButton);//adiciona o botão como filho do container de botões
}
createFridayButton('Sexta-feira');

/* Parte 5

Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias. */
function displayFridays(fridaysArray){
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function(){
    for(let index = 0; index < fridays.length; index += 1){
      if(fridays[index].innerHTML !== newFridayText){
        fridays[index].innerHTML = newFridayText;
      }else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
//let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays();

/* Parte 6

Implemente duas funções que criem um efeito de “zoom”.
Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

Dica - Propriedade: event.target. */
function dayMouseOver(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '600';
  }) 
}
function dayMouseOut(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeigth = '200';
  }) 
}
dayMouseOver();
dayMouseOut();

/*  Parte 7

Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */
function newTaskSpan(task){
  let tasksContainer = document.querySelector('.my-tasks');// armazena o elemento com classe igual a 'my-tasks'
  let taskName = document.querySelector('span');// armazena a criação de um elemento do tipo 'span'

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);// Anexando a task como filha de taskContainer
}
newTaskSpan('projeto');

/* Parte 8

Implemente uma função que adicione uma legenda com cor para a tarefa.
Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
 */
function newTaskDiv(color){
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.querySelector('div'); // Criando uma nova div

  newTask.className = 'task'; // Adicionando className task à newTask
  newTask.style.backgroundColor = color;// Adicionando a cor recebida por parametro como backgroundColor
  tasksContainer.appendChild(newTask);// Adiciona newTask como filho de tasksContainer
}
newTaskDiv('green');

/* Parte 9

Implemente uma função que selecione uma tarefa.
Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada. */
function setTaskClass(){
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event){
    if(selectedTask.length === 0){
      event.target.className = 'task selected';
    }else {
      event.target.className = 'task';
    }
  })
}
setTaskClass();

/* Parte 10

Implemente uma função que atribua a cor da tarefa ao dia do calendário.
Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) */
function setDayColor(){
  let selectedTask = document.getElementsByClassName('task selected');// Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days');// Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task');// Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor;// Salva o Background Color da classe task na variável "taskColor"

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.backgroundColor;
    if(selectedTask.length > 0 || eventTargetColor !== taskColor){
      let color = selectedTask[0].backgroundColor;
      event.target.style.backgroundColor = color; 
    }else if(eventTargetColor === taskColor){
      event.target.style.backgroundColor = 'rgb(119,119,119)';
    }
  })
}
setDayColor();