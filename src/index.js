import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Store from './pages/Store/Store'
import About from './pages/About-us/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="login" element={<Login />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);