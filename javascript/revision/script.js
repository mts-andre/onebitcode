const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionando elemento no final do array
arr.push("Vegeta")

// Adicionando elemento no começo do array
arr.unshift("Goku")

// Removendo elemento no final do array
arr.pop()

// Removendo elemento no começo do array
arr.shift()

console.log(arr)

// Pesquisando elementos
const search = prompt('Pesquisar:')

// IndexOf() - retornar o indice do elemento se existente, se não existente é retornado -1
if(arr.indexOf(search) >= 1) {
    console.log(`O elemento ${search} existe na posição ${arr.indexOf(search)}`)
} else {
    console.log(`O elemento ${search} não existe.`)
}

// Includes - retorna um valor booleano true/false ao comparar se o elemento existe ou não
if(arr.includes(search)) {
    console.log(`O elemento ${search} existe`)
} else {
    console.log(`O elemento ${search} não existe`)
}

// Recortando elementos em específico
console.log(arr.slice(0, 4))

// Substituindo elementos
arr.splice(0, 1, "Goku", "Vegeta")
console.log(arr)