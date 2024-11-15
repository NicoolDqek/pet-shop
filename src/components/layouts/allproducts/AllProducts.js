import './allProducts.css';

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/FireBase.js';
import CardProduct from '../../layouts/cardproduct/CartProduct.js';

const AllProducts = () => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(6); // Productos por página

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

  // Calcular índices para los productos de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcular el total de páginas
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  return (
    <div>
      <div className='all'>
        <div className='aside'>
          <aside className='w-100'>
            <div className='filters'>

              {/* Primer filtro */}
              <div className="form-check">
                <p className="d-inline-flex gap-1">
                  <button className="btn btn-primary btnf" data-bs-toggle="collapse" href="#collapseFilter1" role="button" aria-expanded="false" aria-controls="collapseFilter1">
                    Toggle first filter
                  </button>
                </p>
                <div className="collapse multi-collapse" id="collapseFilter1">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter1Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter1Checkbox">
                      First checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter1">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter1Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter1Checkbox">
                      First checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter1">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter1Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter1Checkbox">
                      First checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter1">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter1Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter1Checkbox">
                      First checkbox
                    </label>
                  </div>
                </div>
              </div>

              {/* Segundo filtro */}
              <div className="form-check">
                <p className="d-inline-flex gap-1">
                  <button className="btn btn-primary btnf" data-bs-toggle="collapse" href="#collapseFilter2" role="button" aria-expanded="false" aria-controls="collapseFilter2">
                    Toggle second filter
                  </button>
                </p>
                <div className="collapse multi-collapse" id="collapseFilter2">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter2Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter2Checkbox">
                      Second checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter2">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter2Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter2Checkbox">
                      Second checkbox
                    </label>
                  </div>
                </div>
                
              </div>

              {/* Tercer filtro */}
              <div className="form-check">
                <p className="d-inline-flex gap-1">
                  <button className="btn btn-primary btnf" data-bs-toggle="collapse" href="#collapseFilter3" role="button" aria-expanded="false" aria-controls="collapseFilter3">
                    Toggle third filter
                  </button>
                </p>
                <div className="collapse multi-collapse" id="collapseFilter3">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter3Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter3Checkbox">
                      Third checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter3">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter3Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter3Checkbox">
                      Third checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter3">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter3Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter3Checkbox">
                      Third checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter3">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter3Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter3Checkbox">
                      Third checkbox
                    </label>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="collapseFilter3">
                  <div className="cardf card-body alert-dark">
                    <input className="form-check-input" type="checkbox" value="" id="filter3Checkbox"></input>
                    <label className="form-check-label" htmlFor="filter3Checkbox">
                      Third checkbox
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
        
        {/* Sección de productos */}
        <div className='products cards'>
          {currentItems.map((producto) => (
            <CardProduct key={producto.id} {...producto} />
          ))}
        </div>
      </div>

      {/* Paginación */}
      <div className='navigation'>
        <nav className='navpage' aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AllProducts;
