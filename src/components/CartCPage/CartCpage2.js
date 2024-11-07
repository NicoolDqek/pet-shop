import React from 'react';

import { Link } from 'react-router-dom';

const CartCpage2 = (active ) => {
  return (
    <div>
      <div>

<div className='p1 container'>
        
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item "><Link className=' text-decoration-none custom-link' to='/'>Inicio</Link></li>
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/products'>Productos</Link></li>
    <li class="breadcrumb-item" aria-current="page">Cart</li>
    <li class="breadcrumb-item" aria-current="page">Lista de Productos</li>
    <li class="breadcrumb-item active" aria-current="page">Entrega y Pago</li>
  </ol>
</nav>
</div>

<div className='pages container'>
    <div className='step'>
        <h1 className='text-center'>1</h1>
        <h6>Lista de Productos</h6>
    </div>
      <div className='step'>
    <h1 className="text-center" style={{ backgroundColor: active? '#EEB54C' : ' #998F8F' }}>2</h1>
        <h6>Entrega y Pago</h6>
    </div>
      <div className='step'>
        <h1 className='text-center'>3</h1>
        <h6>Informacion Personal</h6>
    </div>
</div>
</div>

<div className='container pe-5 ps-5 selected'>
  <h1>Seleccionar el Metodo de Entrega</h1>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Entrega por Mensajeria(pedidos de +300lb)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
   Entrega por Mensajeria(envio gratis +900kg)
  </label>
</div>
<h1>Seleccionar el Metodo de Entrega</h1>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Pago en efectivo al Mensajero
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Pagos con Datos de Tarjeta
  </label>
</div>
</div>
<div className='container p-5'>
 <Link to='/pay3'><button className='h-25 '>CONTINUAR</button></Link>
    </div>
    </div>
    
  )
}

export default CartCpage2
