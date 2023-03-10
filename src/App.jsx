import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Index from './pages'
import Layout from './layouts'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Album from './pages/album'
import { AnimatePresence } from 'framer-motion'
import Notyet from './pages/notyet'
function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation()

  return (
      <AnimatePresence>
        {/* <Layout> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Index />} />
          <Route path="/album/:type/:id" element={<Album />} />
          <Route path="/music" element={<Notyet />} />
          <Route path="/radio" element={<Notyet />} />
          <Route path="/video" element={<Notyet />} />
          <Route path="/profile" element={<Notyet />} />
          <Route path="/Logout" element={<Notyet />} />
        </Routes>
        {/* </Layout> */}
      </AnimatePresence>

  )
}

export default App
