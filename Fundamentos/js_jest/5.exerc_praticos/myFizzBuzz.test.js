const myFizzBuzz = require('./myFizzBuzz');

describe('Testando a função myFizzBuzz', () => {
  it('testando numero é divisvel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('testando numero é divisvel por 3', () => {
    expect(myFizzBuzz(18)).toBe('fizz');
  });
  it('testando numero é divisvel por 5', () => {
    expect(myFizzBuzz(35)).toBe('buzz');
  });
  it('testando numero que não é divivel nem por 3 ou 5', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  it('testando se não é um numero', () => {
    expect(myFizzBuzz('1')).toBeFalsy();
  });
});

