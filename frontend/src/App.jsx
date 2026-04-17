import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Gruppemedlemmer from './component/Gruppemedlemmer'

function App() {
  const [count, setCount] = useState(0)

  function Page(){
    return(
      <main>
        <Gruppemedlemmer/>
      </main>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route index element={<Page/>}/>
      </Routes>
    </Layout>
  )
}

export default App
