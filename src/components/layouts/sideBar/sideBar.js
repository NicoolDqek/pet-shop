import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  // Estado para controlar qué contenido se renderiza
  const [contenidoActivo, setContenidoActivo] = useState('home');

  // Función para renderizar el contenido según la opción seleccionada
  const renderContenido = () => {
    switch (contenidoActivo) {
      case 'home':
        return <div>Contenido de la página de inicio</div>;
      case 'productos':
        return <div>Contenido de productos</div>;
      case 'clientes':
        return <div>Contenido de clientes</div>;
      case 'pedidos':
        return <div>Contenido de pedidos</div>;
      default:
        return <div>Selecciona una opción</div>;
    }
  };

  return (
    <div className="row">
      <div className="side_bar col-sm-1 bg-light sticky-top">
        <div className="side_bar d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top overflow-hidden">
          <Link to="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only">
            <i className="bi bi-arrow-left-circle-fill fs-2"></i>
          </Link>

          <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
            <li className="nav-item">
              <Link 
                
                className="nav-link py-1 px-2" 
                onClick={() => setContenidoActivo('home')}
              >
                <i className="bi-house fs-1"></i>
                <h5 className="text-dark">Home</h5>
              </Link>
            </li>
            <li>
              <Link 
                 
                className="nav-link py-1 px-2" 
                onClick={() => setContenidoActivo('productos')}>
                <i className="text-dark bi bi-box2-heart-fill fs-1"></i>
                <h5 className="text-dark">Productos</h5>
              </Link>
            </li>
            <li>
              <Link 
               
                className="nav-link py-1 px-2" 
                onClick={() => setContenidoActivo('clientes')}
              >
                <i className="text-dark bi bi-people fs-1"></i>
                <h5 className="text-dark">Clientes</h5>
              </Link>
            </li>
            <li>
              <Link 
                 
                className="nav-link py-1 px-2" 
                onClick={() => setContenidoActivo('pedidos')}
              >
                <i className="text-dark bi bi-truck fs-1"></i>
                <h5 className="text-dark">Pedidos</h5>
              </Link>
            </li>
            <li>
              <Link 
               
                className="nav-link py-1 px-2" 
                onClick={() => setContenidoActivo('pagos')}
              >
                <i className="text-dark bi bi-cash-coin fs-1"></i>
                <h5 className="text-dark">Pagos</h5>
              </Link>
            </li>
          </ul>

          <div className="dropdown w-25">
            <a href="#" className="d-flex align-items-center justify-content-center p-4 link-dark text-decoration-none dropdown-toggle ms-5" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi-person-circle h2 fs-1"></i>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm p-3 min-vh-100">
        {/* Renderiza el contenido según lo que se ha seleccionado */}
        {renderContenido()}
      </div>
    </div>
  );
};

export default SideBar;
