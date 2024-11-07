import './productsection.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  getDocs,
} from 'firebase/firestore';

import { db } from '../../../src/firebase/FireBase';
import CardProduct from '../../components/layouts/cardproduct/CartProduct';

const ProductSection = () => {
  const [productos, setProductos] = useState([]);
   useEffect(() => { 
const obtenerProductos = async () => {
      try {
        const colRef = collection(db, 'Producto');  
        const productosSnapshot = await getDocs(colRef); 
        const productosLista = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosLista);  // Almacenar productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    
    obtenerProductos();
  }, []);
  return (
    <div>
    <div className='section'>
      <h3 class

      >Lo Mejor De La Semana</h3>
      <div className='filters'>
        <ul>
            <li><a>Para Perro</a></li>
            <li><a>Para Roedores</a></li>
            <li><a>Para Aves</a></li>
            <li><a>Para Gatos</a></li>
        </ul>
      </div>
      <div className='container cards'>
       <div className='products cards'>
  {productos.slice(0, 4).map((producto) => (
    <CardProduct key={producto.id} {...producto} />
  ))}
</div>

        
        </div>
      </div>
    </div>
    
  )
}

export default ProductSection
