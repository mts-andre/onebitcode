let nomePersonagemAtaque = prompt('Digite o nome do personagem de ataque:')
let poderDeAtaque = parseInt(prompt(`Digite o poder de ataque do ${nomePersonagemAtaque}`))
let nomePersonagemDefesa = prompt('Digite o nome do personagem de defesa:')
let pontosDeVida = parseInt(prompt(`Digite a quantidade de pontos de vida do ${nomePersonagemDefesa}`))
let poderDeDefesa = parseInt(prompt(`Digite o poder de defesa do ${nomePersonagemDefesa}`))
let escudoDefesa = confirm('Você confirma a existência de um escudo de defesa?')
let danoCausado

if(poderDeAtaque > poderDeDefesa && escudoDefesa == false) {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if(poderDeAtaque > poderDeDefesa && escudoDefesa == true) {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
} else if(poderDeAtaque < poderDeDefesa) {
    danoCausado = 0
}

pontosDeVida -= danoCausado

console.log(`Personagem de defesa: ${nomePersonagemDefesa} \nDano causado: ${danoCausado} \nPontos de vida restantes: ${pontosDeVida}`)