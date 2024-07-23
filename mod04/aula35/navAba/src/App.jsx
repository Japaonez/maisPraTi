import { useState } from 'react'
import './App.css'
import Abas from './components/Abas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Abas/>
    </>
  )
}

export default App
