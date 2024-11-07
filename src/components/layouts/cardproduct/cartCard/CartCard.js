import './cartcard.css';

import {
  useContext,
  useState,
} from 'react';

import { CartContext } from '../../../../context/CartContext';

const CartCard = ({ id, nombre, img_principal, precio, cantidad }) => {
  const { removeFromCart, updateCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(cantidad || 1);

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItem(id, newQuantity);  // Actualizar la cantidad en el carrito
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItem(id, newQuantity);  // Actualizar la cantidad en el carrito
    }
  };

  const handleRemove = () => {
    removeFromCart(id);  // Elimina el producto del carrito
  };

  const totalProductPrice = precio * quantity;
  const totalProductPriceFormateado = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(totalProductPrice);

  return (
    <div className='cc mb-3'>
      <div className='cart container'>
        <div className='cartc'>
          <img src={img_principal} alt={nombre} />
        </div>
        <div className='cartc'>
          <p>{nombre}</p>
        </div>
        <div className='cartc'>
          <div className='quantity-container'>
            <button className='btn-decrease' onClick={handleDecreaseQuantity}>-</button>
            <input 
              className='text-center' 
              type="number" 
              value={quantity} 
              readOnly
            />
            <button className='btn-increase' onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
        <div className='cartc me-5'>
          <h3 className='text-center'>{totalProductPriceFormateado}</h3>
        </div>
        <button 
          type="button" 
          className="btn-close" 
          aria-label="Close" 
          onClick={handleRemove}>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
