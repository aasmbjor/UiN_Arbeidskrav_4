import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Frontpage from './component/Frontpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route index element={<Frontpage/>}/>
      </Routes>
    </Layout>
  )
}

export default App
