const prompt = require('prompt-sync')()

console.log("Escreva dois números não iguais: ")

let num1 = parseInt(prompt("Numero 1: "))
let num2 = parseInt(prompt("Numero 2: "))

if(num1 == num2)
    console.log("Não é para serem iguais")
else if(num1 < num2)
    console.log(num1, num2)
else
    console.log(num2, num1)
