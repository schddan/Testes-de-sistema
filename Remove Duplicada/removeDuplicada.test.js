const removeDuplicada = require('./removeDuplicada') 

test("retira duplicadas da minha array", () => {
    const entrada = [1, 2, 2, 3, 4, 4, 5]
    const saida = [1, 2, 3, 4, 5,]
    expect(removeDuplicada(entrada)).toEqual(saida) //Espero que o resultado da chamada com aquela entrada seja igual a saida
}
)

test("retira duplicadas da string", () => {
    const entrada = "aula"
    const saida = "aul"
    expect(removeDuplicada(entrada)).toEqual(saida) //To equal é um dos Matchers, os comparadores do jest
}
)