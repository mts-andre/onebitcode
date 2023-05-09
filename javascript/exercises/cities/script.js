let nome = prompt('Olá, digite seu nome: ')
let continuar = prompt('Você já visitou alguma cidade?\n(Sim | Não)')
let cidades_visitadas = ""
let i = 0

while(continuar == "Sim" || continuar == "sim") {
    let cidade = prompt('Qual o nome da cidade visitada?')
    cidades_visitadas +="\n- " + cidade
    i++
    continuar = prompt("Você já visitou alguma outra cidade?\n(Sim | Não)")
}

if(i == 0) {
    console.log('Nenhuma cidade visitada.')
} else {
    console.log(`Nome do turista: ${nome}`)
    console.log(`Cidades visitadas: ${cidades_visitadas}`)
    console.log(`Quantidade de cidades já visitadas: ${i}`)
}