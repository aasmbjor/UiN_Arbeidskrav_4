import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Frontpage from './Pages/Frontpage'
import Chris from './medlemmer/Chris'
import Ole from './medlemmer/Ole'
import Audun from './medlemmer/Audun'
import Aasmund from './medlemmer/Aasmund'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route index element={<Frontpage/>}/>
        <Route path='/medlem/haraldsen' element={<Chris/>}/>
        <Route path='/medlem/bovolden' element={<Ole/>}/>
        <Route path='/medlem/henden' element={<Audun/>}/>
        <Route path='/medlem/bjornerud' element={<Aasmund/>}/>
      </Routes>
    </Layout>
  )
}

export default App
