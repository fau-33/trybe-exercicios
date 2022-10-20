const sum = require('./sum');

describe('Testa a função sum', () => {
  it('Deve retornar o resultado da soma', () => {
    expect(sum(4,5)).toBe(9);
  })
})