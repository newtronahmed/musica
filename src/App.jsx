import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Index from './pages'
import Layout from './layouts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalContextProvider from './context/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        {/* <Layout> */}
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        {/* </Layout> */}
    </Router>
  )
}

export default App
