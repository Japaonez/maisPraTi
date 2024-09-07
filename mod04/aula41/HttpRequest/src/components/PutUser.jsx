import axios from "axios"

function PutUser(){
    const userData = {
        name: "Jhonata",
        altura: 178
    }

    const sendRequest = () => {
        axios.put("https://reqres.in/api/users/2", userData).then(response => {
            console.log("Dados do usuário atualizado:", response.data)
            alert("Usuário recuperado: " + JSON.stringify(response.data))
        }).catch(e => {
            console.log("Erro ao atualizar o usuário:", e)
            alert("Erro ao atualizar os dados do usuário")
        })
    }

    return(
        <>
            <button onClick={sendRequest}>Atualizar dados</button>
        </>
    )
}

export default PutUser