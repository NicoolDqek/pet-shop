import './navbar.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  getDocs,
} from 'firebase/firestore';
import {
  Link,
  useNavigate,
} from 'react-router-dom'; // Importar useNavigate

import { db } from '../../../firebase/FireBase.js';

const Navbar = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

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

  // Manejar el cambio del término de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Manejar el envío del formulario y redirigir a SearchPage
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // Redirigir a SearchPage con el término de búsqueda
      navigate('/search', { state: { searchTerm } });
    }
  };

  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-body-white">
        <div className="container-fluid ">
          <Link to="/" className="text-decoration-none">
            <a className="navbar-brand" href="#">Pet friendly</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link to="/" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#"><svg width="50px" height="35px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" fill="#EEB54C" stroke="#EEB54C" stroke-width="11.264"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="" stroke-width="18.432"><path fill="#000000" d="M256 27.52L25 212.3v41L256 68.48 487 253.3v-41L256 27.52zm0 64L73 237.9V487h94c.1-32.3.8-79.5 10.2-121 5.2-22.7 12.9-43.9 25.4-60 12.6-16.2 30.7-27 53.4-27s40.8 10.8 53.4 27c12.5 16.1 20.2 37.3 25.4 60 9.4 41.5 10.1 88.7 10.2 121h94V237.9L256 91.52zM163.9 198.2a25.03 14.73 15.04 0 1 12.1 2.2 25.03 14.73 15.04 0 1 17.7 14.6h124.6a14.73 25.03 74.96 0 1 17.7-14.6 14.73 25.03 74.96 0 1 12.1-2.2 14.73 25.03 74.96 0 1 17.8 7.8 14.73 25.03 74.96 0 1-13 19.6 25.03 14.73 15.04 0 1 10.7 18.4 25.03 14.73 15.04 0 1-29.9 5.7 25.03 14.73 15.04 0 1-18.1-16.7H196.4a14.73 25.03 74.96 0 1-18.1 16.7 14.73 25.03 74.96 0 1-29.9-5.7 14.73 25.03 74.96 0 1 10.7-18.4 25.03 14.73 15.04 0 1-13-19.6 25.03 14.73 15.04 0 1 17.8-7.8z"></path></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M256 27.52L25 212.3v41L256 68.48 487 253.3v-41L256 27.52zm0 64L73 237.9V487h94c.1-32.3.8-79.5 10.2-121 5.2-22.7 12.9-43.9 25.4-60 12.6-16.2 30.7-27 53.4-27s40.8 10.8 53.4 27c12.5 16.1 20.2 37.3 25.4 60 9.4 41.5 10.1 88.7 10.2 121h94V237.9L256 91.52zM163.9 198.2a25.03 14.73 15.04 0 1 12.1 2.2 25.03 14.73 15.04 0 1 17.7 14.6h124.6a14.73 25.03 74.96 0 1 17.7-14.6 14.73 25.03 74.96 0 1 12.1-2.2 14.73 25.03 74.96 0 1 17.8 7.8 14.73 25.03 74.96 0 1-13 19.6 25.03 14.73 15.04 0 1 10.7 18.4 25.03 14.73 15.04 0 1-29.9 5.7 25.03 14.73 15.04 0 1-18.1-16.7H196.4a14.73 25.03 74.96 0 1-18.1 16.7 14.73 25.03 74.96 0 1-29.9-5.7 14.73 25.03 74.96 0 1 10.7-18.4 25.03 14.73 15.04 0 1-13-19.6 25.03 14.73 15.04 0 1 17.8-7.8z"></path></g></svg></a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="text-decoration-none">
                  <a className="nav-link" href="#">PRODUCTO</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-decoration-none">
                  <a className="nav-link" href="#">CONTACTOS</a>
                </Link>
              </li>
              <li className="nav-item iconos ms-3 d-flex">
                <Link to="/cart" className="text-decoration-none">
                  <a className="nav-link disabled" aria-disabled="true">
                    <i className="bi bi-bag"></i>
                  </a>
                </Link>
                <Link to="/wish" className="text-decoration-none">
                  <a className="nav-link disabled" aria-disabled="true">
                    <i className="bi bi-suit-heart"></i>
                  </a>
                </Link>
                <Link to="/login" className="text-decoration-none">
                  <a className="nav-link disabled" aria-disabled="true">
                    <i className="bi bi-person"></i>
                    
                  </a>
                </Link>
              </li>
            </ul>

            {/* Formulario de búsqueda */}
            <form className="d-flex me-4 w-100" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2 ms-3 w-75"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn border w-25 p-2" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
