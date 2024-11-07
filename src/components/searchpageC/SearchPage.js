import React, {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

import dog from '../../assets/Xqg8.gif';
import CartProduct from '../../components/layouts/cardproduct/CartProduct.js';
import { db } from '../../firebase/FireBase.js';

import Footer from '../layouts/footer/Footer.js';
import Navbar from '../layouts/navbar/Navbar.js';

const SearchPage = () => {
  const location = useLocation(); // Obtener el state pasado
  const searchTerm = location.state?.searchTerm || ''; // Término de búsqueda
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const colRef = collection(db, 'Producto');
        const productosSnapshot = await getDocs(colRef);
        const productosLista = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosLista);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    obtenerProductos();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const results = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm, productos]);

  return (
   
    <div>
        <Navbar/>
      <h2 className='p-5 ms-4'style={{color:'gray'}}>Resultados para "{searchTerm}"</h2>
    
      {filteredProducts.length > 0 ? (
        <ul className='ms-4 d-flex flex-wrap'>
          {filteredProducts.map(producto => (
            <CartProduct key={producto.id} {...producto} />
          ))}
        </ul>
      ) : (
       <div className='d-flex flex-column justify-content-center align-items-center'>
       <img  className=' h-25 mb-0 pb-0' src={dog} alt='no hay productos en el carrito'></img>
       <p className='pt-0 mb-5 mt-0 fa-2x fw-bolder'>no se encontraron resultados</p>
       </div>
      )}
  
      
      <Footer/>
    </div>
  );
};

export default SearchPage;
