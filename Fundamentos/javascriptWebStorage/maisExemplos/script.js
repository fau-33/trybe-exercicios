let organization = {
  name: 'Trybe',
  data: 2019,
}

let storage = localStorage;

storage.setItem('escola', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('escola'));
//console.log(org);

let classes = ['2019/set', '2019/oct'];
storage.setItem('turmas', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('turmas'));
console.log(cls);