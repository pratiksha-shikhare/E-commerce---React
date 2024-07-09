import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductDetail } from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

 const App = () => {
  const [data, setData] = useState([...items])
  return (
    <>
      <Router>
        <Navbar setData={setData}/>
        <Routes>
          <Route path='/' element={<Product items={data}/>} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart/' element={<Cart />} />
        </Routes>
        
      </ Router>
    </>
  )
}
export default App