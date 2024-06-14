const prompt = require('prompt-sync')()

console.log("Ande no limite")

let velocidade = parseInt(prompt("Qual a velocidade atual do carro: "))

if(velocidade > 80)
    console.log("Você foi multado em R$", (velocidade - 80) * 5, "por estar andando em", velocidade, "KM/h")