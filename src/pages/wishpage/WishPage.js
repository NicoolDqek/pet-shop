import React, { useContext } from 'react'
import Navbar from '../../components/layouts/navbar/Navbar'
import Footer from '../../components/layouts/footer/Footer'
import { Link } from 'react-router-dom'
import dog from '../../assets/Xqg8.gif';
import CartWish from '../../components/layouts/cardproduct/cardwish/CardWish'
import { WishContext } from '../../context/WishContext';

const WishPage = (producto) => {
  const { wish } = useContext(WishContext);
  return (
    <div>
      <Navbar/>
      <div className='p1 container'>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/'>Inicio</Link></li>
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/products'>Productos</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Lista de Productos</li>
  </ol>
</nav>
</div>
<h2 className='m-1 p-4 fa-2x'>Carrito de Compras</h2>
      {wish.length === 0 ? (
        <div className='d-flex flex-column justify-content-center align-items-center'>
       <img  className=' h-25 mb-0 pb-0' src={dog} alt='no hay productos en el carrito'></img>
       <p className='pt-0 mb-5 mt-0 fa-2x fw-bolder'>aun no hay productos en el carrito</p>
       </div>
     ) : (
        wish.map((producto) => (
          <CartWish key={producto.id} {...producto} />
        ))
      )}
      <Footer/>
    </div>
  )
}

export default WishPage
