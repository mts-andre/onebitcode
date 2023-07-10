let opcao = ''

do {
    opcao = prompt('Escolha uma opção: \n1 - Cadastrar \n2 - Remover \n3 - Analisar \n4 - Transferir \n5 - Encerrar')
    
    switch(opcao) {
        case '1':
            console.log('Cadastrar registro')
            break
        case '2':
            console.log('Remover registro')
            break
        case '3':
            console.log('Analisar registro')
            break
        case '4':
            console.log('Transferir registro')
            break
        case '5':
            console.log('Encerrando sessão...')
            break
        default:
            console.log('Opção inválida.')
    }
}while(opcao != '5')

console.log('Sessão encerrada.')