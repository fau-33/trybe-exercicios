// Exercicio de fixação logico Ou

let weekDay = "sabado";
let message = ''; 

if(weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
  message = 'Oba, mais um dia de aprendizado na Trybe >:D';
}else {
  message = 'FINALMENTE, descanso merecido UwU';
}

console.log(message);