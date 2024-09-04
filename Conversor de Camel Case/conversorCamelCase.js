function snakeToCamel(snakeStr) {
    if (typeof snakeStr !== 'string') {
      throw new Error("O argumento deve ser uma string.");
    }
    return snakeStr.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
  }


module.exports = snakeToCamel;