
import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './src/pages/Detail'
import Homepage from './src/pages/HomePage'
import ProductPage from './src/pages/admin/Product'
import AddProductPage from './src/pages/admin/AddProduct'
import UpdateProductPage from './src/pages/admin/UpdateProduct'


function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setProducts(products.filter((item) => item.id != id)))

  }

  const addProduct = (products) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    })
  }

  const onUpdate = (products) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    })
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/product/dele/:id' element={<ProductPage products={products} removeProduct={removeProduct} />} />
        <Route path='/admin/product/add' element={<AddProductPage addProduct={addProduct} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
      </Routes>
    </>
  )
}

export default App
