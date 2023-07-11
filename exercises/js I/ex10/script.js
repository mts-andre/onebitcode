const palavra = prompt('Digite uma palavra')
let palavraInvertida = ''

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if(palavra == palavraInvertida) {
    console.log('É um palíndromo.')
} else {
    console.log('Não é um palíndromo.')
}