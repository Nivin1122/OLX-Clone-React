import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import AddProduct from './pages/AddProduct'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ad_products' element={<AddProduct/>}/>
        <Route path='/users/prods/:p_id' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
