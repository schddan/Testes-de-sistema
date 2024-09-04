const snakeToCamel = require ('./conversorCamelCase')

describe('snakeToCamel', () => {
    test('converte camelCase para snake_case corretamente', () => {
        expect(snakeToCamel('camel_case_string')).toBe('camelCaseString');
        expect(snakeToCamel('another_example_string')).toBe('anotherExampleString');
        expect(snakeToCamel('yet_another_test')).toBe('yetAnotherTest');
    });

    test('lança erro quando o argumento não é uma string', () => {
        expect(() => snakeToCamel(123)).toThrow();
        expect(() => snakeToCamel({})).toThrow();
        expect(() => snakeToCamel([])).toThrow();
        expect(() => snakeToCamel(null)).toThrow();
    });x

    test('lida com strings vazias corretamente', () => {
        expect(snakeToCamel('')).toBe('');
    });

    test('lida com strings que já estão em snake_case', () => {
        expect(snakeToCamel('camelCaseString')).toBe('camelCaseString');
    });

    test('lida com strings contendo números e caracteres especiais', () => {
        expect(snakeToCamel('camel_case1_string')).toBe('camelCase1String');
        expect(snakeToCamel('special$_char_string')).toBe('special$CharString');
    });
});