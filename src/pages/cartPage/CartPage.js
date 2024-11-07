import React from 'react';

import CartCpage from '../../components/CartCPage/CartCpage.js';
import Footer from '../../components/layouts/footer/Footer.js';
import Navbar from '../../components/layouts/navbar/Navbar';

const CartPage = () => {
  return (
    <div>
      <Navbar/>
      
      <CartCpage active={true}/>
      <Footer/>
    </div>
  )
}

export default CartPage
