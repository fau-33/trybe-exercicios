const {encode, decode} = require('./encodeDecode');

describe('Testa as funções encode e decode', () =>{
  it('A função encode é definida', () =>{
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () =>{
    expect(typeof encode).toEqual("function");
  });
  it('testando a vogal "a" é o numero 1', () =>{
    expect(encode('ana')).toEqual('1n1');
  });
  it('testando a vogal "e" é o numero 2', () =>{
    expect(encode('ele')).toEqual('2l2');
  });
  it('testando a vogal "i" é o numero 3', () =>{
    expect(encode('ir')).toEqual('3r');
  });
  it('testando a vogal "o" é o numero 4', () =>{
    expect(encode('oh')).toEqual('4h');
  });
  it('testando a vogal "u" é o numero 5', () =>{
    expect(encode('ux')).toEqual('5x');
  });
  it('A função decode é definida', () =>{
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () =>{
    expect(typeof decode).toEqual("function");
  });
  it('testando o numero 1 na vogal a', () =>{
    expect(decode('1n1')).toEqual('ana');
  });
  it('testando o numero 2 na vogal e', () =>{
    expect(decode('2l2')).toEqual('ele');
  });
  it('testando o numero 3 na vogal i', () =>{
    expect(decode('3r')).toEqual('ir');
  });
  it('testando o numero 4 na vogal o', () =>{
    expect(decode('4v4')).toEqual('ovo');
  });
  it('testando o numero 5 na vogal u', () =>{
    expect(decode('5x')).toEqual('ux');
  });
  it('testando se o retorno da função é igual ao mesmo número de caracteres', () =>{
    expect(decode('valeria').length).toEqual(7);
  });
});