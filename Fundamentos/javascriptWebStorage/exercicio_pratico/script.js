window.onload = function(){
  let select = document.querySelector('select');
  select.addEventListener('change', function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
  })
}