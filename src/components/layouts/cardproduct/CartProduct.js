import './cartproduct.css';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';

import { Link } from 'react-router-dom';
import {
  Bounce,
  toast,
} from 'react-toastify';

import { CartContext } from '../../../context/CartContext';
import { WishContext } from '../../../context/WishContext';

const CartProduct = ({id,nombre,img_principal,precio,precio_original}) => {
  const precioFormateado = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio);
    const precioFormateadoOriginal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio_original);
   
    const { addToCart } = useContext(CartContext);
    const { addToList } = useContext(WishContext);
    const handleAddToCart = () => {
    addToCart({ id, nombre, img_principal, precio,precio_original}); // Añadir el producto al carrito
    notifyc()
  };
 const notify = () => toast.info('Agregado a la lista de deseos👍', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
 const notifyc = () => toast.info('producto Agregado a Carrito 👍', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

 const handleAddToList = () => {
    addToList({ id, nombre, img_principal, precio}); 
    notify()
  };
  
 
  return (
    <div className='card'>
      <div className='img-card'>
      <Link to={`/details/${id}`}><img src={img_principal} alt=''></img></Link>
      </div>
      <div className='details'>
        <div className='p1 '>
        <Link to='/details/id' className='text-decoration-none'><p>{nombre}</p></Link>
        <h6>{precioFormateadoOriginal}</h6>
        </div>
        <div className='price'>
            <h3>{precioFormateado}</h3>
        <div className='pcl'>
          <button onClick={handleAddToList} className="nav-link " aria-disabled="true">
              <i className="bi bi-suit-heart pe-1"></i>
            </button>
          <button onClick={handleAddToCart} className="nav-link">
              <i className="bi bi-bag pe-1"></i>
              </button>
              
        </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
