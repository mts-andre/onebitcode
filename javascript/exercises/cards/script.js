let cards = []
let option = ''

do {
    option = prompt('Cartas no baralho: ' + cards.length + '\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair')
    switch(option) {
        case '1':
            cards.unshift(prompt('Digite o nome da carta:'))
            break
        case '2':
            let cards_top = cards.pop()
            if(!cards_top) {
                console.log('Nenhuma carta disponível')
            } else {
                console.log(`Você puxou a carta ${cards_top}`)
            }
            break
        case '3':
            console.log('Jogo encerrado!')
            break
        default:
            console.log('Opção inválida')
    }

} while (option !== '3')