const ordenarCrescente = require('./ordenarCrescente')

test("ordenar números inteiros", () => {
    const entrada = [10, 2, 5, 3, 20, 9]
    const saida = [2,3,5,9,10,20]
    expect(ordenarCrescente(entrada)).toEqual(saida) //Espero que o resultado da chamada com aquela entrada seja igual a saida
}
)
