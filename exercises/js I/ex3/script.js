const nomeVeiculo1 = prompt('Digite o nome do primeiro veículo:')
const velocidadeVeiculo1 = parseFloat(prompt(`Agora, digite a velocidade do veículo ${nomeVeiculo1}`))
const nomeVeiculo2 = prompt('Digite o nome do segundo veículo:')
const velocidadeVeiculo2 = parseFloat(prompt(`Agora, digite a velocidade do veículo ${nomeVeiculo2}`))

if(velocidadeVeiculo1 == velocidadeVeiculo2) {
    console.log('As velocidades dos veículos são iguais.')
}else {
    if(velocidadeVeiculo1 > velocidadeVeiculo2) {
        console.log(`A velocidade do veículo ${nomeVeiculo1} é maior.`)
    } else {
        console.log(`A velocidade do veículo ${nomeVeiculo2} é maior.`)
    }
}

console.log(`Veículos: ${nomeVeiculo1}, ${nomeVeiculo2} \nVelocidade de ${nomeVeiculo1}: ${velocidadeVeiculo1} \nVelocidade de ${nomeVeiculo2}: ${velocidadeVeiculo2}`)
