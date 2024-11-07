import React from 'react';

import CartCpage3 from '../../components/CartCPage/CartCpage3';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const CartPage3 = () => {
  return (
    <div>
       <Navbar/>
      <CartCpage3 active={true}/>
      
      <Footer/>
    </div>
  )
}

export default CartPage3
