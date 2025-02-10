import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/pages/ErrorPage'
import OrderPage from './components/pages/order/OrderPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/crazee-burger/" element={<App />} />
        <Route path="/crazee-burger/order/:username" element={<OrderPage />} />
        <Route path="/crazee-burger/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
