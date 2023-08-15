import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'


import {BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About /> } />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
)

