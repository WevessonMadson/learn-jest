module.exports = {

// 1º) Escreva uma string que receba a idade de uma pessoa em anos e retorne a mesma idade em dias:

converterAnosDias(idade) {
    return idade * 365
},


// 2º) Crie uma função que receba dois número e retorne se o primeiro é maior ou igual ao segundo; returns true ou false

maiorOuIgual(num1, num2) {
    return num1 >= num2
},

// 3º) Crie uma função que recebe um valor booleano ou númerico e retorna o seu inverso, caso número positivo retorna o número negativo

inverter(valor) {
    if (typeof valor != 'boolean' && typeof valor != 'number') {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    } else if (typeof valor == 'number') {
        return valor * (-1)
    } else {
        return !valor
    }
},

// 4º) Crie uma fução que receba quatro números (numero, minimo, maximo, inclusivo), e retorne se o parametro numero está entre o minimo e maximo. Quando inclusivo for true, entre passa a ser incluindo os números minimo e máximo, valor padrão de inclusivo é falso

estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo == true) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
},

// 5º) Crie uma função que receba um array de números e retorne a soma de todos os números desse array

somarNumeros(numeros) {
    return numeros.reduce((acum, atual) => acum + atual)
}

}

