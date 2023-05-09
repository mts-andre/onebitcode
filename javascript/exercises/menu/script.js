let opcao = ''

do {
    opcao = prompt(
        'Seja bem-vindo(a)!\n' +
        '\nEscolha uma das opções abaixo:' +
        '\n1 - Opção Um' +
        '\n2 - Opção Dois' +
        '\n3 - Opção Três' +
        '\n4 - Opção Quatro' +
        '\n5 - Encerar'
    )

    switch (opcao) {
        case '1':
          console.log('Você escolheu a opção 1.')
          break
        case '2':
          console.log('Você escolheu a opção 2.')
          break
        case '3':
          console.log('Você escolheu a opção 3.')
          break
        case '4':
          console.log('Você escolheu a opção 4.')
          break
        case '5':
          console.log('Encerrando o programa...')
          break
        default:
          console.log('Entrada inválida! Escolha uma das cinco opções.')
    }

    if(opcao <= 0 || opcao > 5) {
        break
    }

} while(opcao != 5)