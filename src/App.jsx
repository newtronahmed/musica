import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Index from './pages'
import Layout from './layouts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Album from './pages/album'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
        {/* <Layout> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/album/:type/:id" element={<Album />} />
          </Routes>
        {/* </Layout> */}
    </Router>
  )
}

export default App
