import { useState, useContext, createContext } from 'react'
import MyProvider, { MyContext } from './components/contexto'

const Preference = createContext()

function App() {
  // const context = useContext(MyContext)

  const [pref, setPref] = useState({ theme: "light", language: "en"})

  const setTheme = () => {
    setPref(tema => ({
      ... tema,
      theme: tema.theme == "light" ? "dark" : "light"
    }))
  }
  const setLang  = (lang) => {
    setPref(ling => ({
      ... ling,
      language: lang
    }))
  }

  return (
    <>
      {/* <MyProvider>
        {context.pref.theme}
      </MyProvider> */}

      <Preference.Provider value={{ pref, setTheme, setLang }}>
        <div style={{background: pref.theme == "dark" ? "grey" : "white", color: pref.theme == "dark" ? "white" : "black"}}>
          <Toolbar/>
          <button onClick={setTheme}>Trocar o tema</button>
          <button onClick={() => setLang("pt")}>pt-br</button>
          <button onClick={() => setLang("en")}>en-us</button>
        </div>
      </Preference.Provider>
    </>
  )
}

function Toolbar(){
  const {pref} = useContext(Preference)

  return(
    <>
      <div>
        Tema = {pref.theme} <br/> Linguagem: {pref.language}
      </div>
    </>
  )
}

export default App