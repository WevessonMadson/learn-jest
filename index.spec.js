const func = require('./index.js');

describe('Converter anos em dias (365 dias)', () => {
    it('25 anos retornará 9125 dias', () => {
        let result = func.converterAnosDias(25)
        expect(result).toBe(9125)
    })

    it('70 anos retornará 25550', () => {
        let result = func.converterAnosDias(70)
        expect(result).toBe(25550)
    })
})

describe('Primeiro número é maior ou igual ao segundo?', () => {
    it('0 maior ou igual a 0? return true', () => {
        let result = func.maiorOuIgual(0, 0)
        expect(result).toBe(true)
    })
    
    it('0 number é maior ou igual 0 string? return false', () => {
        let result = func.maiorOuIgual(0, "0")
        expect(result).toBe(true)
    })

    it('5 é maior ou igual a 1? return true', () => {
        let result = func.maiorOuIgual(5, 1)
        expect(result).toBe(true)
    })
})

describe('Inverter um valor booleano ou um número para o sinal oposto', () => {
    it('informado true, para retornar false', () => {
        let result = func.inverter(true)
        expect(result).toBe(false)
    })

    it('Informado string para dar exceção', () => {
        let result = func.inverter("6")
        expect(result).toBe('booleano ou número esperados, mas o parâmetro é do tipo string')
    })

    it('Informado -2000 para retornar 2000', () => {
        let result = func.inverter(-2000)
        expect(result).toBe(2000)
    })

    it('Informado string para dar exceção', () => {
        let result = func.inverter("programação")
        expect(result).toBe('booleano ou número esperados, mas o parâmetro é do tipo string')
    })
})

describe('Vreificar se o numero está entre o mínimo e o máximo', () => {
    it('Esperado true', () => {
        let result = func.estaEntre(100, 50, 100, true)
        expect(result).toBe(true)
    })

    it('Esperado false', () => {
        let result = func.estaEntre(16, 100, 160)
        expect(result).toBe(false)
    })

    it('Esperado false', () => {
        let result = func.estaEntre(3, 3, 150)
        expect(result).toBe(false)
    })

    it('Esperado true', () => {
        let result = func.estaEntre(3, 3, 150, true)
        expect(result).toBe(true)
    })
})

describe('Somar os números de um array que foi passado', () => {
    it('passado [10, 10, 10], esperado 30', () => {
        let result = func.somarNumeros([10, 10, 10])
        expect(result).toBe(30)
    })

    it('passado [15, 15, 15, 15], esperado 60', () => {
        let result = func.somarNumeros([15, 15, 15, 15])
        expect(result).toBe(60)
    })
})