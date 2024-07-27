import { useState, useEffect } from "react"

let noticia = Math.floor(Math.random() * 10), flag = 0

function Noticia(){
    const [user, setUser] = useState(null)
    const [tempo, setTempo] = useState(0)

    if(tempo == 10){
        flag++
        setTempo(0)
        noticia = Math.floor(Math.random() * 10)
    }

    useEffect(() => {
        const fetchUserData = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + noticia)
            const userData = await response.json()
            setUser(userData)
        }

        fetchUserData()

        const teste = setInterval(() => {
            setTempo(tempo => tempo + 1)
        }, 1000)

        return () => {
            setUser(null)
            clearInterval(teste)
        }
    }, [flag])

    return(
        <>
            <div>
                {user ? (
                    <div>
                        <h1>{noticia}: {user.title}</h1>
                        <p>{user.body}</p>
                    </div>
                ) : (
                    <p>Buscando usuario</p>
                )}

                <p>{tempo}</p>
            </div>
        </>
    )
}

export default Noticia