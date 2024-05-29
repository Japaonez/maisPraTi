const pessoa = {
    nome: "Jhonata",
    idade: 25,
    profissao: "Estoquista"
}

// pessoa.nome = "Antonio"

///////////////////// for in

for(let chave in pessoa){
    console.log(chave + ":", pessoa[chave])
}

pessoa.falar = function(){
    return `Meu nome é ${this.nome}`
}

console.log(pessoa.falar())

// delete pessoa.profissao

// console.log(pessoa)

//////////////////// for of

const numeros = [10, 20, 100]

for(let numero of numeros){
    console.log(numero)
}

/////////////////// exercicio

const carro = [{marca: "Honda", modelo: "Civic"}, {marca: "Chevrolet", modelo: "Astra"}]

for(let carros in carro){
    console.log(carros + ":", carro[carros])
}

for(let carros of carro){
    console.log(carros['modelo'])
}

console.log(carro)

/////////////////// for each

let cores = ["Azul", "Preto", "Branco"]

cores.forEach((cor, indice) => {
    console.log(indice + ":", cor)
})

////////////////// exercicio 2

let numeros2 = [12, 4, 23, 36, 45]
let soma = 0

numeros2.forEach((value) => {
    console.log(value * 2)
    soma += value
})

console.log(soma)