let dinheiro = parseFloat(prompt('Digite a quantidade de dinheiro disponível atualmente: '))
let decisao = ''

do {
    decisao = prompt(
        'Saldo disponível: R$ ' + dinheiro.toFixed(2) +
        '\n1 - Adicionar dinheiro' +
        '\n2 - Remover dinheiro' +
        '\n3 - Sair'
    )

    switch(decisao) {
        case '1':
            dinheiro += parseFloat(prompt('Informe o valor a ser adicionado: '))
            break
        case '2':
            dinheiro -= parseFloat(prompt('Informe o valor a ser removido:'))
            break
        case '3':
            console.log('Sessão finalizada.')
            break
        default:
            console.log('Opção inválida')
    }

    if(decisao <= 0 || decisao > 3) {
        break
    }

}while(decisao != '3')