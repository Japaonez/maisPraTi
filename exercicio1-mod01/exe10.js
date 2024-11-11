const prompt = require('prompt-sync')()

console.log("Escreva um número para repetir 10 vezes")

let num = parseInt(prompt("Numero: "))

for(let i = 0; i < 10; i++)
    console.log(num)