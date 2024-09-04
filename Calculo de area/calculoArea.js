function calcularArea(nomeObjeto, dimensoes) {
    let area;

    switch (nomeObjeto.toLowerCase()) {
        case 'quadrado':
            if (dimensoes.largura && dimensoes.altura) {
                area = dimensoes.largura * dimensoes.altura;
            } else {
                throw new Error("Para um quadrado, forneça as propriedades 'largura' e 'altura'.");
            }
            break;
       
        case 'triangulo':
            if (dimensoes.largura && dimensoes.altura) {
                area = (dimensoes.largura * dimensoes.altura) / 2;
            } else {
                throw new Error("Para um triângulo, forneça as propriedades 'largura' e 'altura'.");
            }
            break;

        case 'circulo':
            if (dimensoes.raio) {
                area = Math.PI.toFixed(2) * Math.pow(dimensoes.raio, 2);
            } else {
                throw new Error("Para um círculo, forneça a propriedade 'raio'.");
            }
            break;

        default:
            throw new Error("Objeto desconhecido. Use 'quadrado', 'triangulo' ou 'circulo'.");
    }

    return area;
}

module.exports = calcularArea