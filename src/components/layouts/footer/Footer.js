import { Link } from 'react-router-dom';
import './footer.css';

import React from 'react';
 
const Footer = ({ hasMarginTop}) => {
  return (
    
       <footer className='footer' style={{ marginTop: hasMarginTop ? '2rem' : '0px' }}>
        <div className='p1'>
        <h5 className='mb-3 text-center brant'>PetFriendly</h5>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-send"></i>
        <Link to="/admin" ><i class="bi bi-whatsapp"></i></Link>
        </div>
        <div className='c2'>
        <div className='p2'>
            <ul>
                <li className='t1'>Menu</li>
                <li>Catalogo</li>
                <li>Comportamiento</li>
                <li>Entrega y Pago</li>
                <li>Contacto</li>
            </ul>
        </div>
 <div className='p3'>
            <ul>
                <li className='t1'>Catalogo</li>              
                <li>Para Perros</li>
                <li>Para Gatos</li>
                <li>Para Aves</li>
                <li>Para Roedores</li>
            </ul>
        </div>
        <div className='p4'>
            <ul>
                <li className='t1'>Contactos</li>              
                <li>+57(3118713672)</li>
                <li>Horario Aperura: 8:00 a 20:00</li>
                <li>Suba</li>
            </ul>
        </div>
        </div>
       </footer>
    
  )
}

export default Footer
