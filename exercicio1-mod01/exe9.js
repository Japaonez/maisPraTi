const prompt = require('prompt-sync')()

console.log("Código de origem: ")

let codigo = parseInt(prompt("Insere o código de origem do produto: "))
let produto

if(codigo == 1)
    produto = "do Sul"
else if(codigo == 2)
    produto = "do Norte"
else if(codigo == 3)
    produto = "do Leste"
else if(codigo == 4)
    produto = "do Oeste"
else if(codigo < 7)
    produto = "do Nordeste"
else if(codigo < 10)
    produto = "do Sudeste"
else if(codigo < 21)
    produto = "do Centro-Oeste"
else if(codigo > 25 && codigo < 51)
    produto = "do Nordeste"
else
    produto = "Importado"

console.log("Produto", produto)