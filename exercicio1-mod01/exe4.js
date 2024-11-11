const prompt = require('prompt-sync')()

let nota1 = parseInt(prompt("Nota primeira prova: "))
let nota2 = parseInt(prompt("Nota segunda prova: "))

let media = (nota1 + nota2) / 2

if(media >= 6) 
    console.log("PARABÉNS! Você foi aprovado")
else 
    console.log("Você foi REPROVADO! Estude mais")
