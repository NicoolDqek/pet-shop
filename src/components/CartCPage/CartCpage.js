import './cartCpage.css';

import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import dog from '../../assets/Xqg8.gif';
import { CartContext } from '../../context/CartContext';
import CartCard from '../layouts/cardproduct/cartCard/CartCard';

const CartCpage = (active,producto) => {
const { cart } = useContext(CartContext);


const totalConDescuento = cart.reduce((total, producto) => {
    const precio = producto.precio ? Number(producto.precio) : 0;
    const quantity = producto.quantity ? Number(producto.quantity) : 1;  
    return total + (precio * quantity);
  }, 0);

  // Sumar el precio original de todos los productos
  const totalPrecioOriginal = cart.reduce((total, producto) => {
    const precioOriginal = producto.precio_original ? Number(producto.precio_original) : 0;
    const quantity = producto.quantity ? Number(producto.quantity) : 1; 
    return total + (precioOriginal * quantity);
  }, 0);


  const descuento = totalPrecioOriginal - totalConDescuento;


  return (
    <div>
    
<div className='p1 container'>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/'>Inicio</Link></li>
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/products'>Productos</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Lista de Productos</li>
  </ol>
</nav>
</div>

<div className='pages container'>
    <div className='step'>
        <h1 className="text-center" style={{ backgroundColor: active? '#EEB54C' : ' #998F8F' }}>1</h1>
        <h6>Lista de Productos</h6>
    </div>
      <div className='step'>
        <h1 className="text-center">2</h1>
        <h6>Entrega y Pago</h6>
    </div>
      <div className='step'>
        <h1 className="text-center">3</h1>
        <h6>Informacion Personal</h6>
    </div>
</div>
<h2 className='m-1 p-4 fa-2x'>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className='d-flex flex-column justify-content-center align-items-center'>
       <img  className=' h-25 mb-0 pb-0' src={dog} alt='no hay productos en el carrito'></img>
       <p className='pt-0 mb-5 mt-0 fa-2x fw-bolder'>aun no hay productos en el carrito</p>
       </div>
     ) : (
        cart.map((producto) => (
          <CartCard key={producto.id} {...producto} />
        ))
      )}
      
{/* nueva section parte de + y button */}
<div className='prices '>
  <div className='container tablec'>

  <Link to='/pay'><button className='h-25'>CONTINUAR</button></Link>
  <div className='table1'>
    <table className='tablep'>
      <tr>
        <td>Monto Inicial Total</td>
        <td className='text-center'>{totalPrecioOriginal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
      </tr>
      <tr>
        <td>Descuento</td>
        <td className='text-center'>{descuento.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
      </tr>
      <tr>
        <td>Monto Total</td>
        <td className='text-center total'>{totalConDescuento.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
      </tr>
    </table>
  </div>
</div>
</div>
    </div>
  )
}

export default CartCpage
