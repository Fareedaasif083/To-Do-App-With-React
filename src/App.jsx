import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import MainContent from './pages/MainContent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainContent/>
    </>
  )
}

export default App
