import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/pages/ErrorPage'
import OrderPage from './components/pages/order/OrderPage'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order/:inputValue" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
