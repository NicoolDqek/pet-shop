import React from 'react';

import CartCpage2 from '../../components/CartCPage/CartCpage2';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const CartPage2 = () => {
  return (
    <div>
      <Navbar/>
      <CartCpage2 active={true}/>
      
      <Footer/>
    </div>
  )
}

export default CartPage2
