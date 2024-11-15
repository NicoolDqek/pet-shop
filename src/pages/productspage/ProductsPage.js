import React from 'react'
import AllProducts from '../../components/layouts/allproducts/AllProducts.js'
import Navbar from '../../components/layouts/navbar/Navbar.js'
import Footer from '../../components/layouts/footer/Footer.js'
import ProductPageC from '../../components/productpage/ProductPageC.js'

const ProductsPage = () => {
  return (
    <div>
      <Navbar/>
      <ProductPageC/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}

export default ProductsPage
