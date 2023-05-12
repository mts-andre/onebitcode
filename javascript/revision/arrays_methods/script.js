const jogadores = [
    { nome: "Stephen Curry", titulos: 4, time: "Golden State Warriors", em_atividade: true},
    { nome: "Klay Thompson", titulos: 4, time: "Golden State Warriors", em_atividade: true},
    { nome: "Draymond Green", titulos: 4, time: "Golden State Warriors", em_atividade: true},
    { nome: "Andrew Wiggins", titulos: 1, time: "Golden State Warriors", em_atividade: true},
    { nome: "Kevin Durant", titulos: 2, time: "Phoenix Suns", em_atividade: true},
    { nome: "Lebron James", titulos: 4, time: "Los Angeles Lakers", em_atividade: true},
    { nome: "Michael Jordan", titulos: 6, time: "Chicago Bulls", em_atividade: false},
    { nome: "Larry Bird", titulos: 3, time: "Boston Celtics", em_atividade: false},
    { nome: "Kobe Bryant", titulos: 5, time: "Los Angeles Lakers", em_atividade: false},
    { nome: "Jason Tatum", titulos: 0, time: "Boston Celtics", em_atividade: false}
]

// Map - cria uma nova matriz executando uma função em cada elemento da matriz
const nome_jogadores = jogadores.map(function (nome_jogadores) {
    return nome_jogadores.nome
})

console.log(nome_jogadores)

// Filter - cria uma nova matriz com elementos de matriz que passam em um teste.
const jogadores_situacao = jogadores.filter(function (jogadores_situacao) {
    return jogadores_situacao.em_atividade == false
})

console.log(jogadores_situacao)

// Reduce - executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor.

const times = jogadores.reduce(function (time, jogadores) {
    if(time[jogadores.time]) {
        time[jogadores.time].push(jogadores)
    } else {
        time[jogadores.time] = [jogadores]
    }

    return time
}, {})

console.log(times)

// Sort - classifica uma matriz em ordem alfabética
jogadores.sort(function (a, b) {
    return a.nome - b.nome
})