import React from "react"
import { Routes, Route } from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { HomePage } from "../Pages/HomePage"
import { Product } from "../Pages/Product"
import { Products } from "../Pages/Products"

export const AllRoutes=()=>{
    return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
    )
}