const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer1[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;
customer1[newKey] = fullName;
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

customer2['lastName'] = 'Silva';
console.log(customer2)