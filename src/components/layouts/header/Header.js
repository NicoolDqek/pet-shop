import './header.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header row'>
    <div className='info'>
      <p><span>30%</span><br></br>de descuento en la primera compra</p>
      <Link className='bg-light p-2 rounded-1 text-black text-decoration-none fw-light ' to='/cart'>Ir al carrito</Link>
    </div>
    </div>
  )
}

export default Header
