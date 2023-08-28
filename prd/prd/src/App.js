import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Appbar from './components/Appbar';
import Products from './components/Products';
import Catagory from './components/Catagory';
import Productinfo from './components/Productinfo';



const App = () => {

  fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())
  .then(console.log);

  return (
    <Router>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/catagory' element={<Catagory/>}/>
        <Route path='/productinfo/:id' element={<Productinfo />} />
      </Routes>
    </Router>
  )
}

export default App
