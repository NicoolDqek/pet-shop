import './general.css';

import { Link } from 'react-router-dom';

const CartCpage3 = (active) => {
  return (
    
 <div>

<div className='p1 container'>
        
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item "><Link className=' text-decoration-none custom-link' to='/'>Inicio</Link></li>
    <li class="breadcrumb-item"><Link className=' text-decoration-none custom-link' to='/products'>Productos</Link></li>
    <li class="breadcrumb-item" aria-current="page">Cart</li>
    <li class="breadcrumb-item" aria-current="page">Lista de Productos</li>
    <li class="breadcrumb-item" aria-current="page">Entrega y Pago</li>
    <li class="breadcrumb-item active" aria-current="page">Informacion Personal</li>
  </ol>
</nav>
</div>

<div className='pages container'>
    <div className='step'>
        <h1 className='text-center'>1</h1>
        <h6>Lista de Productos</h6>
    </div>
      <div className='step'>
        <h1 className='text-center'>2</h1>
        <h6>Entrega y Pago</h6>
    </div>
      <div className='step'>
        <h1 className="text-center" style={{ backgroundColor: active? '#EEB54C' : ' #998F8F' }}>3</h1>
        <h6>Informacion Personal</h6>
    </div>

   
</div>
<h3 className='container  ps-5 pb-3'>Informacion Personal</h3>

<div className='formulario container'>
<div className=' f1'>
    <div class="mb-3 ">
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Apellido"></input>
</div>
<div class="mb-3">
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Nombre"></input>
</div>
<div class="mb-3">
  <input type="text" class="form-control" id="" placeholder="+57"></input>
</div>
</div>
<h3 className='container  pt-3 ps-4 pb-2 '>Informacion Personal</h3>
<div className='f2'>
    <div class="mb-3">
  <input type="text" class="form-control in1" id="" placeholder="Ciudad"></input>
</div>
</div>
<div className='f3 ps-4 pt-2'>
<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="Calle" aria-label="City"></input>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Casa" aria-label="State"></input>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Departamento" aria-label="Zip"></input>
  </div>
  <div class="form-floating">
  <textarea class="form-control textarea" placeholder="Deja Comentario Aqui" id="floatingTextarea"></textarea>
  <label  className='p-3 ms-2' for="floatingTextarea">Deja Comentario Aqui</label>
</div>
</div>
 <Link to='/pay3'><button className='h-25 mt-4 p-3'>CONTINUAR</button></Link>

</div>
</div>
</div>
  )
}

export default CartCpage3
