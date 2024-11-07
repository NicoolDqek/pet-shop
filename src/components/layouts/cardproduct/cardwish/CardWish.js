import React, { useContext } from 'react';

import { CartContext } from '../../../../context/CartContext';
import { WishContext } from '../../../../context/WishContext';

const CardWish = ({ id, nombre, img_principal, precio }) => {
  const { removeFromList } = useContext(WishContext);
  const { addToCart } = useContext(CartContext);
  const precioFormateado = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio);


  const handleRemoveFromList = () => {
    removeFromList(id);
  };

   const handleAddToCart = () => {
    addToCart({ id, nombre, img_principal, precio}); 
  };

  return (
    <div>
     
      <div className='cc mb-2 pt-3'>
        <div className='cart container'>
          <div className='cartc'>
            <img src={img_principal} alt={nombre}></img>
          </div>
          <div className='cartc text-center'>
            <p>{nombre}</p>
          </div>
          <div className='cartc me-5'>
            <h3 className='text-center '>{precioFormateado}</h3>
          </div>
          <div className='cartc me-5'>
            <button  onClick={handleAddToCart}><i className="bi bi-bag fs-3"></i></button>
          </div>
          {/* Botón para eliminar el producto de la lista de deseos */}
          <button type="button" className="btn-close" aria-label="Close" onClick={handleRemoveFromList}></button>
        </div>
      </div>
    </div>
  );
};

export default CardWish;
