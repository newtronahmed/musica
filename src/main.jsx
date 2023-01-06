import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalContextProvider from './context/global'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Router>
  // </React.StrictMode>
)
