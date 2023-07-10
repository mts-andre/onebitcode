const nomeTurista = prompt('Eai turista! Qual seu nome?')
let continuar = confirm('Você já visitou alguma cidade? \nOk p/ Sim \nCancelar p/ Não')
let qtdCidadesVisitadas = 0
let cidadesVisitadas = ''

while(continuar == true) {
    let cidade = prompt('Qual o nome da cidade que você visitou?')
    cidadesVisitadas += cidade + ', '
    qtdCidadesVisitadas++

    continuar = confirm('Você já visitou alguma outra cidade? \nOk p/ sim \nCancelar p/ Não')
}

alert('Sessão encerrada. \nOrganizando informações...')
console.log(`Nome do turista: ${nomeTurista} \nCidades visitadas: ${cidadesVisitadas} \nVisitas: ${qtdCidadesVisitadas}`)
