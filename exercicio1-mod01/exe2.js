const prompt = require('prompt-sync')()

let qntEleitores = prompt("Quantidades de eleitores: ")
let qntVotosBrancos = prompt("Quantidades de votos brancos: ")
let qntVotosNulos = prompt("Quantidades de votos nulos: ")
let qntVotosValidos = prompt("Quantidades de votos válidos: ")

qntVotosBrancos /= qntEleitores / 100
qntVotosNulos /= qntEleitores / 100
qntVotosValidos /= qntEleitores / 100

console.log(qntVotosBrancos + "% de votos brancos\n" + qntVotosNulos + "% de votos nulos\n" + qntVotosValidos + "% de votos válidos")