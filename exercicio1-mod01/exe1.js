const prompt = require('prompt-sync')()

let grauCelsius = prompt("Temperatura em grau Celsius: ")

let grauFahrenheit = (grauCelsius * 9/5) + 32

console.log(grauCelsius + " ºC transformado em " + grauFahrenheit + " ºF")