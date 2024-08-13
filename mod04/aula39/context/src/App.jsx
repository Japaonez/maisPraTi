// import MyProvider from './components/Contexto'
// import MyChildren from './components/Filho'
import { useState, createContext, useContext } from "react"

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} })

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme == "light" ? "dark" : "light")
  }

  return (
    <>
      {/* <MyProvider>
        <MyChildren/>
      </MyProvider> */}

      <ThemeContext.Provider value = {{ theme, toggleTheme }}>
        <div>
          <Toolbar/>
          <button onClick={toggleTheme}>Trocar o tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar(){
  const theme = useContext(ThemeContext)

  return(
    <>
      <div style={{background: theme == "dark" ? "grey" : "white", color: theme == "dark" ? "white" : "black"}}>
        Tema utilizado = {theme.theme}
      </div>
    </>
  )
}

export default App
