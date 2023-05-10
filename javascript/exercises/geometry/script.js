function exibirMenu() {
    return prompt(
        'Calculadora Geométrica\n' +
        '1. Calcular área de triângulo\n' +
        '2. Calcular área de retângulo\n' +
        '3. Calcular área de quadrado\n' +
        '4. Calcular área de trapézio\n' +
        '5. Calcular área de círculo\n' +
        '6. Sair\n'
    )
}

function calcularAreaTriangulo() {
    const base = parseFloat(prompt('Informe o valor de base(b):'))
    const altura = parseFloat(prompt('Informe o valor de altura(h):'))
    return (base * altura) / 2
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt('Informe o valor de lado(l):'))
    return lado * lado
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt('Informe o valor de base(b):'))
    const altura = parseFloat(prompt('Informe o valor de altura(h):'))
    return base * altura
}

function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt('Informe o valor de base menor(b1):'))
    const baseMaior = parseFloat(prompt('Informe o valor de base maior(b2))'))
    const altura = parseFloat(prompt('Informe o valor de altura(h):'))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = parseFloat(prompt('Informe o valor de raio(r):'))
    return (3.14 * raio * raio)
}

function executarCalculo() {
    let option = ''

    do {
        option = exibirMenu()
        let resultado = undefined

        switch (option) {
            case '1':
                resultado = calcularAreaTriangulo()
                break
            case '2':
                resultado = calcularAreaRetangulo()
                break
            case '3':
                resultado = calcularAreaQuadrado()
                break
            case '4':
                resultado = calcularAreaTrapezio()
                break
            case '5':
                resultado = calcularAreaCirculo()
                break
            case '6':
                console.log('Encerrando a sessão')
                break
            default:
                console.log('Opção inválida')
        }

        if(resultado) {
            console.log(`Resultado: ${resultado.toFixed(2)}`)
        }
    } while(option != '6') 
} 

executarCalculo()