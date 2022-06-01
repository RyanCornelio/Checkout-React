import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App/>}>
        <Route path="About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Home" element={<Home />} />
        <Route path="Store" element={<Store />} />
      </Route> */}
    </Routes>
  </BrowserRouter>,
    <App />
    <Navbar/>
    <Footer />
  </React.StrictMode>
  
)
