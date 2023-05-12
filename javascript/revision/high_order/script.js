function calcular(x, y, operacao) {
    console.log('Calculando...')
    const resultado = operacao(x,y)
    return resultado
}

function multiplicar(x, y) {
    return x * y
}

function somar(x, y) {
    return x + y
}

function dividir(x, y) {
    return x / y
}

calcular(4, 5, function(x, y) {
    return x - y
})

// forEach - Atrela uma função para cada elemento de uma matriz

let arr = ["Matheus", "Ana", "Marcos"]
arr.forEach(function(nome, registro, lista) {
    console.log({nome, registro, lista})
})
