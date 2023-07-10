let opcao = ''
let saldo = parseFloat(prompt('Digite a quantidade inicial de saldo bancário:'))

do {
    opcao = prompt('Escolhe uma das opções: \n1 - Adicionar \n2 - Remover \n3 - Sair')
    switch (opcao) {
        case '1':
            const dinheiroAdicionado = parseFloat(prompt('Digite a quantidade que deve ser adicionada:'))
            saldo += dinheiroAdicionado
            break
        case '2':
            const dinheiroRemovido = parseFloat(prompt('Digite a quantidade que deve ser removida:'))
            saldo -= dinheiroRemovido
            break
        case '3':
            console.log('Encerrando sessão...')
            break
        default:
            console.log('Opção inválida.')
    }
} while(opcao != '3')

console.log(`Saldo: R$${saldo.toFixed(2)}`)