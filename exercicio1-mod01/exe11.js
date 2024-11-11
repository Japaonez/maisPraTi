const prompt = require('prompt-sync')()

console.log("Ler quantidade indeterminada de números até um número negativo aparecer")

let num

do{
    num = prompt("Numero: ")
    if(num >= 0)
        console.log((num % 2 == 0)?"PAR":"ÍMPAR")
}while(num >= 0)