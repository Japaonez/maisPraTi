const prompt = require('prompt-sync')()

console.log("Forme um triângulo")

let A = parseInt(prompt("Lado A: "))
let B = parseInt(prompt("Lado B: "))
let C = parseInt(prompt("Lado C: "))

let triangulo

if(A < B + C && B < A + C && C < A + B){
    if(A == B || A == C || B == C)
        triangulo = "Forma um triângulo isósceles por possuir dois lados iguais"
    else if(A != B && B != C)
        triangulo = "Forma um triângulo escaleno por possuir todos os lados diferente"
    else if(A == B && B == C)
    triangulo = "Forma um eqüilátero escaleno por possuir todos os lados iguais"
}else
    triangulo = "Não forma um triângulo"

console.log(triangulo)