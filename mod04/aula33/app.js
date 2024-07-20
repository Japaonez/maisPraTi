const conteudos = [
    [
        "Texto primeiro",
        "Texto segundo",
        "Texto terceiro"
    ],
    [
        "Texto primeiro do segundo",
        "Texto segundo do segundo",
        "Texto terceiro do segundo"
    ],
    [
        "Texto primeiro do terceiro",
        "Texto segundo do terceiro",
        "Texto teceiro do terceiro"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')

function displayContent(items){
    let listaConteudo = ""

    for(const item of items)
        listaConteudo += `<li>${item}</li>`

    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo
    content.append(lista)
}

function activateButton(btn){
    btnTab1.className = ''
    btnTab2.className = ''
    btnTab3.className = ''
    btn.className = 'active'
}

function handleClick(event){
    const btnId = event.target.id
    activateButton(event.target)

    if(btnId == "btn-tab1")
        displayContent(conteudos[0])
    else if(btnId == "btn-tab2")
        displayContent(conteudos[1])
    else if(btnId == "btn-tab3")
        displayContent(conteudos[2])

}

btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)