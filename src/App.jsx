import React from 'react'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
// import {router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import Footer from './components/Footer';


const App = () => {


  return (

<>
<Navbar/>

<Routes>
<Route path ='/' element ={<Home/>} />
<Route path ='/product/:id' element ={<Product/>} />
</Routes>
<Footer/>
</>
  )
}

export default App
