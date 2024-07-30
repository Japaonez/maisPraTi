import { useState } from "react";

function Desafio(){
    const [dado, setDado] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    })

    const [errors, setErrors] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const newErrors = {}

        if(!dado.nome) newErrors.nome = "Nome é obrigatório"
        if(!dado.email) newErrors.email = "Email é obrigatório"
        else if(!/\S+@\S+\S+.\S+/.test(dado.email))
            newErrors.email = "Email inválido"
        if(!dado.senha) newErrors.senha = "Senha obrigatório"
        else if(dado.senha.length < 8) newErrors.senha = "Senha precisa ter minimo 8 caracteres"
        if(dado.senha != dado.confirmarSenha) newErrors.confirmarSenha = "Senha precisa ser igual"

        return newErrors
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setDado(prev => ({
            ... prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const senha = document.getElementsByName("senhaNovamente")[0].value
        const validateErrors = validate()

        if(Object.keys(validateErrors).length == 0)
            setSubmitted(true)
        if(Object.keys(validateErrors))
            setErrors(validateErrors)

        
    }

    return(
        <>
            {submitted && <h1>Registrado com sucesso</h1>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome Completo:</label>
                    <input type="text" name="nome" value={dado.nome} onChange={handleChange}/>
                    {errors.nome && <p>{errors.nome}</p>}
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="text" name="email" value={dado.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={dado.senha} onChange={handleChange}/>
                    {errors.senha && <p>{errors.senha}</p>}
                </div>
                <div>
                    <label>Senha novamente:</label>
                    <input type="password" name="confirmarSenha" value={dado.confirmarSenha} onChange={handleChange}/>
                    {errors.confirmarSenha && <p>{errors.confirmarSenha}</p>}
                </div>
                <button type="submit">Submeter</button>
            </form>
        </>
    )
}

export default Desafio