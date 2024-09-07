import axios from "axios"

function DeleteUser(){
    const sendRequest = () => {
        axios.delete("https://reqres.in/api/users/2").then(response => {
            console.log("Dados do usuário:", response)
            alert("Deletado: " + JSON.stringify(response.status))
        }).catch(e => {
            console.log("Erro ao deletar o usuário:", e)
            alert("Erro ao deletar os dados do usuário")
        })
    }

    return(
        <>
            <button onClick={sendRequest}>Deletar dados</button>
        </>
    )
}

export default DeleteUser