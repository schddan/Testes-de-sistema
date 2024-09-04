const calcularArea = require('./calculoArea');

test('calcula a área de um quadrado corretamente com TOBE', () => {
    const quadrado = { altura: 5, largura: 5 };
    const resultado = 25
    expect(calcularArea('quadrado', quadrado)).toBe(resultado);
});
test('calcula a área de um triângulo corretamente', () => {
    const triangulo = { altura: 4, largura: 6 };
    expect(calcularArea('triangulo', triangulo)).toBe(12);
});
test('calcula a área de um círculo corretamente', () => {
    const circulo = { raio: 3 };
    expect(calcularArea('circulo', circulo)).toBeCloseTo(28.26);
});
test('lança erro quando dimensões são null', () => {
    expect(() => calcularArea('quadrado', null)).toThrow();
    expect(() => calcularArea('triangulo', null)).toThrow();
    expect(() => calcularArea('circulo', null)).toThrow();
});
test('lança erro quando dimensões estão faltando', () => {
    const quadradoInvalido = { largura: 5 };
    const trianguloInvalido = { altura: 4 };
    const circuloInvalido = {};

    expect(() => calcularArea('quadrado', quadradoInvalido)).toThrow();
    expect(() => calcularArea('triangulo', trianguloInvalido)).toThrow();
    expect(() => calcularArea('circulo', circuloInvalido)).toThrow();
});
// test('lança erro quando dimensões são inválidas', () => {
//     const quadradoInvalido = { altura: 'cinco', largura: 5 };
//     const trianguloInvalido = { altura: 4, largura: 'seis' };
//     const circuloInvalido = { raio: 'três' };

//     expect(() => calcularArea('quadrado', quadradoInvalido)).toThrow();
//     expect(() => calcularArea('triangulo', trianguloInvalido)).toThrow();
//     expect(() => calcularArea('circulo', circuloInvalido)).toThrow();
// });
test('lança erro quando objeto é desconhecido', () => {
    const objetoDesconhecido = { altura: 4, largura: 6 };
    expect(() => calcularArea('hexagono', objetoDesconhecido)).toThrow();
});
