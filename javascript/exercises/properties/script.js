const properties = []
let option = ''


do {
    option = prompt(`Imóveis cadastrados: ${properties.length} \nEscolha uma das opções: \n1 - Novo imóvel \n2 - Listar imóveis \n3 - Encerrar sessão`)

    switch(option) {
        case '1':
            const propertie_info = {}
        
            propertie_info.owner = prompt('Digite o nome do proprietário:')
            propertie_info.bedrooms = parseInt(prompt('Digite a quantidade de quartos:'))
            propertie_info.bathrooms = parseInt(prompt('Digite a quantidade de banheiros:'))
            propertie_info.garage = prompt('Possui garagem? \nSim | Não')

            let confirmation = confirm(`Deseja salvar o imóvel com essas informaçôes: \nProprietário: ${propertie_info.owner} \nQuantidade de quartos: ${propertie_info.bedrooms} \nQuantidade de banheiros: ${propertie_info.bathrooms} \nContém garagem: ${propertie_info.garage}`)

            if(confirmation) {
                properties.push(propertie_info)
            } else {
                console.log('Preencha os dados da propriedade corretamente.')
            }

            break;

        case '2':
            for(let i = 0; i < properties.length; i++) {
                console.log(`Imóvel ${i + 1} \nProprietário: ${properties[i].owner} \nQuantidade de quartos: ${properties[i].bedrooms} \nQuantidade de banheiros: ${properties[i].bathrooms} \nContém garagem: ${properties[i].garage}`)
            }
            break

        case '3':
            console.log('Sessão encerrada, obrigado!')
            break;

        default:
            console.log('Opção inválida')
    }
} while(option != '3')