let vagas = []

function listarVaga() {
    const info_vagas = vagas.reduce(function (descr_completa_vaga, vaga, numero) {
        descr_completa_vaga += (numero + 1) + '. '
        descr_completa_vaga += vaga.nome 
        descr_completa_vaga += ' (' + vaga.candidatos.length + ' candidatos). \n'
        return descr_completa_vaga
    }, '')

    console.log(info_vagas)
}

function criarVaga() {
    const nome_vaga = prompt('Digite o nome da vaga:')
    const descr_vaga = prompt(`Digite a descrição para a vaga de ${nome_vaga}`)
    const data_limite_vaga = prompt('Digite sua data de expiração: (dd/mm/aaaa) ')

    console.log(`Nome da vaga: ${nome_vaga}`)
    console.log(`Descrição da vaga: ${descr_vaga}`)
    console.log(`Data limite para inscrição: ${data_limite_vaga}`)

    const confimar = confirm('Deseja salvar essas informações?')

    if(confimar) {
        const nova_vaga = {
            nome_vaga,
            descr_vaga,
            data_limite_vaga,
            candidatos: []
        }

        vagas.push(nova_vaga)
        console.log(`Vaga ${nome_vaga} adicionada.`)
    } else {
        console.log('Operação cancelada, as informações não foram salvas.')
    }
}

function exibirVaga() {
    const numero_vaga = prompt('Informe o número da vaga que deseja visualizar:')
    const vaga = vagas[numero_vaga]

    const info_candidatos = vaga.candidatos.reduce(function (info_compl, candidato) {
        return info_compl + '\n - Número de candidatos: ' + candidato  
    }, '')

    console.log(`Vaga n° ${numero_vaga} \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData limite: ${vaga.data_limite} \nQuantidade de candidatos: ${vaga.candidatos.length} \nCandidatos inscritos: ${info_candidatos} `)
}

function inscreverCandidato() {
    const nome_candidato = prompt('Informe o nome do candidato:')
    const numero_vaga = prompt('Informe o número da vaga:')
    const vaga = vagas[numero_vaga]

    const confimar = confirm('Deseja salvar essas informações?' + `\nCandidato: ${nome_candidato} \nVaga: \nNome da vaga: ${vaga.nome_vaga} \nDescrição da vaga: ${vaga.descr_vaga} \nData limite: ${vaga.data_limite_vaga}`)

    if(confimar) {
        vagas.candidatos.push(nome_candidato)
        console.log('Inscrição realizada')
    } else {
        console.log('Inscrição cancelada')
    }
}

function excluirVaga() {
    const numero_vaga = prompt('Informe o número da vaga:')
    const vaga = vagas[numero_vaga]

    const confimar = confirm(`Deseja mesmo excluir a vaga n°${numero_vaga}\nNome: ${vaga.nome_vaga} \nDescrição ${vaga.descr_vaga}\n Data Limite: ${vaga.data_limite_vaga}`)

    if(confimar) {
        vagas.splice(numero_vaga, 1)
        console.log('Vaga excluída')
    }
}

function exibirMenu() {
    const func = prompt('Escolha uma das opções: \n1 - Listar vagas disponíveis \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n5 - Excluir vaga \n6 - Sair')

    return func
}

function executar() {
    let option = ""

    do {
        option = exibirMenu()

        switch(option) {
            case '1':
                listarVaga()
                break
            case '2':
                criarVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                const confimar = confirm('Deseja sair dessa sessão?')
                if(confimar) {
                    console.log('Encerrando sessão')
                } else {
                    exibirMenu()
                }

                break
            default:
                console.log('Opção inválida.')
        }
    } while(option != '6')
}

executar()
