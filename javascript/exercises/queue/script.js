let queue_consult = ['Matheus', 'Marcos', 'Jefferson', 'Arnaldo']
let option = ''

do {
    console.log('Lista atualizada:')
    for(let i = 0; i < queue_consult.length; i++) {
        console.log(`${i + 1}° ${queue_consult[i]} `)
    }
    
    option = prompt('Selecione uma opção: \n1 - Novo Paciente\n2 - Consultar paciente\n3 - Sair')

    if(option == '1') {
        queue_consult.push(prompt('Digite o nome do paciente: '))
    } else if(option == '2') {
        let pacient_info = queue_consult.shift()
        console.log(`Paciente em consulta: ${pacient_info}`)
    } else if(option == '3') {
        console.log('Sessão encerrada.')
    }
} while (option != '3')