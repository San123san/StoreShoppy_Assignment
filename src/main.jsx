import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import AllPage from './AllPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<AllPage />} />
        </Routes>
      </Router>
    {/* <App /> */}
  </React.StrictMode>,
)
