let valorConvertido= parseFloat(prompt('Digite um valor em metros(m):'))
const conversao = prompt('Digite uma unidade de medida para conversão: \na) milímetro (mm) \nb) centímetro(cm) \nc) decímetro (dm) \nd) decâmetro (dam) \ne) hectômetro (hm) \nf) quilômetro (km)').toLowerCase()

switch(conversao) {
    case 'cm':
        valorConvertido *= 100
        break
    case 'mm':
        valorConvertido += 1000
        break
    case 'dm':
        valorConvertido *= 10
        break
    case 'dam':
        valorConvertido /= 10
        break
    case 'hm':
        valorConvertido /= 100
        break
    case 'km':
        valorConvertido /= 1000
        break
    default:
        console.log('Valor inválido.')
}

console.log(valorConvertido.toFixed(2))