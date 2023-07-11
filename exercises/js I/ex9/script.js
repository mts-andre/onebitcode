const numero = parseInt(prompt('Digite um número:'))
let resultados = ''

for(let i = 1; i <= 20; i++) {
    resultados += numero + ' x ' + i + ' = ' + (numero * i) + '\n'
}

console.log(resultados)
console.log('Sessão encerrada.')