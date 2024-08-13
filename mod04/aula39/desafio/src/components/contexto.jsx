import { useState } from "react"
import { createContext } from "react"

const MyProvider = createContext()

export function MyContext(props){
    const [pref, setPref] = useState({ theme: "light", language: "en" })

    const setTheme = () => setPref(tema => ({
        ... tema,
        theme: tema.theme == "light" ? "dark" : "light"
    }))
    const setLang  = (lang) => setPref(ling => ({
        ... ling,
        language: lang
    }))

    return(
        <>
            <MyProvider.Provider value={{ pref, setTheme, setLang} }>
                {props.children}
            </MyProvider.Provider>
        </>
    )
}

export default MyProvider