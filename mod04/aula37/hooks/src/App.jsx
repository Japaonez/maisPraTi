import { useState } from 'react'
import TimerComponent from './components/LifeCycle'
import UserProfile from './components/User'
import Noticia from './components/Noticia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Noticia/>
    </>
  )
}

export default App
