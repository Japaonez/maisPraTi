let promessa = new Promise((resolve, reject)=>{
    //try {
        setTimeout(()=>{
            let resposta = {}

            if(false){
                resposta = {
                    codigo: 404,
                    erro: "Objeto não encontrado"
                }

                reject(resposta)
            }

            resposta = {
                1: { id: 1, nome: "Caio"},
                2: { id: 2, nome: "Leonan"},
                3: { id: 3, nome: "Rogério"}
            }

            resolve(resposta)
        }, 3000)
    //} catch (e) {
        
    //}
}).then(()=>{
    let promessa2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let resposta = {}

            if(false){
                resposta = {
                    codigo: 1000,
                    erro: "Assistir One Piece"
                }

                reject(resposta)
            }

            resposta = {
                1: { id: 1, nome: "Vanessa"},
                2: { id: 2, nome: "Fernanda"},
                3: { id: 3, nome: "Guilherme"}
            }

            resolve(resposta)
        }, 3000)
    }).then((dados)=>{
        console.log(dados)
    }).catch(e=>{
        console.log(e)
    })
}).then(()=>{
    console.log("then 2")
    return "then 3"
}).then(param=>{
    console.log(param)
}).catch((e=>{
    console.log("Deu erro" + e)
}))

console.log(promessa)