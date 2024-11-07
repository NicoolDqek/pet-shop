import './sectionfnl.css';

import React from 'react';

const SectionFnl = () => {
  return (
    <div  className='mt'>
        <h2 className='text-center'>¿Por Que Elegirnos?</h2>
       <div className='c1'>
        <div className='conte'>
        <i class="bi bi-gift"></i>
        <h4 className='text-center'>Sistema De Bonificacion</h4>
        <p className='text-center '>Sistema de fidelizacion ampliado para habituales </p>
       </div>
       <div className='conte'>
        <i class="bi bi-car-front-fill"></i>
        <h4 className='text-center'>Envio Gratis</h4>
        <p className='text-center'>Entrega gratuita despues de los 300km <br></br> servicio 24/7 </p>
       </div>
       <div className='conte'>
        <i class="bi bi-clipboard2-check"></i>
        <h4 className='text-center'>Siempre con Cuidado</h4>
        <p className='text-center' >Cumplimiento de estandares de Calidad reconocidos Internacionales</p>
       </div>
       </div>
    </div>
  )
}

export default SectionFnl
