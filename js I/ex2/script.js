/*
  Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).  
  
  Após calcular os resultados o programa deve exibi-los na tela.
*/

let numeroA = parseInt(prompt('Digite o valor de A'))
let numeroB = parseInt(prompt('Digite o valor de B'))

console.log(`Soma: ${numeroA + numeroB} \nSubtração: ${numeroA - numeroB} \nMultiplicação: ${numeroA * numeroB} \nDivisão: ${numeroA / numeroB}`)
