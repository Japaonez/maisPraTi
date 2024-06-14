const prompt = require('prompt-sync')()

console.log("Quantos cigarros você fuma?")

let dias = parseInt(prompt("Por dia: "))
let anos = parseInt(prompt("Por quantos anos: "))

let total = dias * (anos * 365)  * 600
total = total / 60 / 60

console.log("Você perdeu", Math.floor(total / 24) , "dias e", Math.floor(total % 24), "minutos de vida")