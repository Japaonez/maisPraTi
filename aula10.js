const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

// For in para iterar sobre as propriedades dentro das notas, calcule a média
// e imprima da turma. Caso a média esteja acima de 3.0, indique que a turma está
// acima da média de aprovação.

let notaTotal = 0
let quantidadeAluno = 0

for(let nota in professor.notas){
    notaTotal += professor.notas[nota]
    quantidadeAluno++
}

let media = notaTotal / quantidadeAluno

console.log("A média da turma é", media.toFixed(2) + ", porantanto a Turma está", media > 3 ? "Aprovada":"Reprovada")

/////////////////////////////////////////

const biblioteca = [
    {titulo: "12 Regras para Vida", autor: "Jordan Peterson", ano: 1925},
    {titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937},
    {titulo: "Senhora do Jogo", autor: "Sidney Sheldon", ano: 2009},
    {titulo: "Zé Carioca", autor: "Disney", ano: 1940},
    {titulo: "Nação Dopamina", autor: "Anna Lembke", ano: 2021}
]

// For of para iterar sobre o array biblioteca
// Para cada livro, verifique se foi publicado antes de 2000
// Imprimir o titulo e o ano dos livros que atendem essa condição

for(let livro of biblioteca){
    if(livro.ano < 2000)
        console.log(livro.titulo, livro.ano)
}

///////////////////////////////////////////

const filmes = [
    {titulo: "Tropa de Elite", genero: "Ação"},
    {titulo: "Capitão Fantástico", genero: "Drama"},
    {titulo: "O Poderoso Chefão", genero: "Crime"},
    {titulo: "Clube de Luta", genero: "Drama"},
    {titulo: "Oppenheimer", genero: "Biografia"},
    {titulo: "High School Musical", genero: "Musical"},
    {titulo: "Barbie", genero: "Comédia"}
]

/*
* Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
* Para cada filme no array, verifique se o gênero já existe no objeto contagem.
* Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
* Após loop, imprima cada gênero e o número de filmes correspondente
*/

const contagemGenero = {}

filmes.forEach(value => {
    if(contagemGenero[value.genero])
        contagemGenero[value.genero]++
    else
        contagemGenero[value.genero] = 1
})

for(let genero in contagemGenero){
    console.log("Existem", contagemGenero[genero], "filme de", genero)
}

/////// Pesquisa Binária

// Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa
// binária para encontrar o valor certo.

let contagem

const pesquisaBinaria = (lista, numero) => {
    let low = 0
    let high = lista.length - 1
    contagem = 0

    while(low <= high){
        const mid = Math.floor((low + high)/2)
        const guess = lista[mid]
        contagem++

        if(guess == numero)
            return mid
        else if(guess > numero)
            high = mid - 1
        else
            low = mid + 1
    }

    return null
}

const myList = []

for(let i = 1; i <= 256; i++)
    myList.push(i)

// for(let i = 1; i <= myList.length; i++){
//     if(pesquisaBinaria(myList, i) > 7)
//         console.log(i, pesquisaBinaria(myList, i))
// }

console.log(pesquisaBinaria(myList, 256), contagem)

//////////// spread e rest

let titloArtigo = "Movimento ágil"
const listaTimes = ["Grêmio", "Football Porto Alegrense"]
const listaTimes2 = ["São Jose", "Pelotas"]
const listaTimesCompletos = ["Flamengo", "São Paulo", ...listaTimes, ...listaTimes2] // spread

console.log(titloArtigo) // spread
console.log(...titloArtigo) // spread
console.log([...titloArtigo]) // spread
console.log(listaTimesCompletos) // spread

function soma(...param){ // rest
    let resultado = 0
    console.log(param)
    param.forEach(v => resultado += v)
    return resultado
}

console.log(soma(3, 8, 5, 7))

function multiplicacao(m, ...p){ // rest
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(e => resultado += m * e)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 50))