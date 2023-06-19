/*
  Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

  - o primeiro nome
  - o sobrenome
  - o campo de estudo
  - o ano de nascimento
  
  Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

let nome = prompt('Digite seu nome:')
let ultimoNome = prompt('Digite seu sobrenome:')
let campoDeEstudo = prompt('Digite seu campo de estudo:')
let anoNascimento = parseInt(prompt('Digite seu ano de nascimento:'))

console.log(`Nome: ${nome} ${ultimoNome} \nCampo de estudo: ${campoDeEstudo} \nIdade: ${2023 - anoNascimento}`)
