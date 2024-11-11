const prompt = require('prompt-sync')()

console.log("Média ponderada até receber o número 0")

let nota = parseFloat(prompt("Digite a nota: "))
let peso

let notas = 0
let pesos = 0

if(nota != 0){
    while(nota != 0){
        peso = parseFloat(prompt("Digite o peso: "))
        notas += nota * peso
        pesos += peso
        nota = parseFloat(prompt("Digite a nota: "))
    }
}

console.log(notas, pesos, notas / pesos)