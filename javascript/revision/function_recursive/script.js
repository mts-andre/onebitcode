// Funçôes recursivas: é uma função que chama ela mesma e cria uma pilha de chamadas

// A primeira função a sair da pilha é a última que foi colocada

// Uma função recursiva necessita de uma forma de parar sua execução

function dividir(num) {
    console.log(num)
    if(num % 2 == 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(250)

function fatorial(num) {
    console.log(num)

    // Aplicando casos bases, que evitam o loop infinito.
    if(num === 0) {
        return 1
    } else if(num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

fatorial(5)