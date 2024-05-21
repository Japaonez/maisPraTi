const prompt = require('prompt-sync')()

console.log("Escreva quatro números")
let num1 = parseInt(prompt("Número 1: "))
let num2 = parseInt(prompt("Número 2: "))
let num3 = parseInt(prompt("Número 3: "))
let num4 = parseInt(prompt("Número 4: "))

num4 += num1 + num2 + num3
num1 += 25
num2 *= 3
num3 *= 0.12

console.log(num1 + " " + num2 + " " + num3.toFixed(2) + " " + num4)