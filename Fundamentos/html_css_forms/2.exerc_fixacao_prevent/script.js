const input_text = document.querySelector('#input-text');
const input_checkbox = document.querySelector('#input-checkbox');
const href_link = document.querySelector('#href');

href_link.addEventListener('click', function(event){
  event.preventDefault();
  //console.log(href_link);
});

input_checkbox.addEventListener('click', function(event){
  event.preventDefault();
  //console.log(input_checkbox);
})

input_text.addEventListener('keypress', function(event){
  const charater = event.key;
  if(charater !== 'a'){
    event.preventDefault();
  }
})