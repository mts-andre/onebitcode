let valor = parseFloat(prompt('Digite um valor em metros: '))
let tipo_conversao = prompt('Agora, escolha uma unidade de medida para realizarmos a conversão: \na) mm\nb) cm\nc) dm\nd) dam\ne) hm\nf) km\n\nInforme a letra vinculada a opção :)').toLowerCase()

switch(tipo_conversao) {
    case 'a': 
        console.log('Resultado: ' + valor + 'm = ' + valor * 1000 + 'mm')
        break
    case 'b':
        console.log('Resultado: ' + valor + 'm = ' + valor * 100 + 'cm')
        break
    case 'c':
        console.log('Resultado: ' + valor + 'm = ' + valor * 10 + 'dm')
        break
    case 'd':
        console.log('Resultado: ' + valor + 'm = ' + valor / 10 + 'dam')
        break
    case 'e':
        console.log('Resultado: ' + valor + 'm = ' + valor / 100 + 'hm')
        break
    case 'f':
        console.log('Resultado: ' + valor + 'm = ' + valor / 1000 + 'km')
        break
    default:
        console.log('Opção inválida.')
}