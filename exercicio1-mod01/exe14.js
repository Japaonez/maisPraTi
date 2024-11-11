const prompt = require('prompt-sync')()

console.log("Média aritmética até receber o número 0")

let dec = parseFloat(prompt("Digite um numero: "))
let numeros = 0
let res = 0

while(dec != 0){
    numeros++
    res += dec
    dec = parseFloat(prompt("Digite um numero: "))
}

console.log(res, "/", numeros, "=", res / numeros)