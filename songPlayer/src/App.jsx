import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SongPlayer } from './components/SongPlayer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SongPlayer />
    </>
  )
}

export default App
