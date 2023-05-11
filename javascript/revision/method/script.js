const pessoa = {
    nome: "Matheus André",
    curso: "Sistemas de Informação",
    seApresentar() {
        console.log('Olá, me chamo ' + this.nome + ", sou estudante de " + this.curso)
    }
}

console.log(pessoa)
pessoa.seApresentar()
