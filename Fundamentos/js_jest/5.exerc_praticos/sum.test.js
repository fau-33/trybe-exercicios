const sum = require('./sum');

describe('Testa a função sum', () => {
  it('Deve retornar o resultado da soma', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Deve retornar o resultado da soma zero e zero for igual a zero', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Testar se a função ao lançar uma string e um numero', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});