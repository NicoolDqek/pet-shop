import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="">
    <div className="row ">
        <div className="side_bar col-sm-1 bg-light sticky-top">
            <div className=" side_bar d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top overflow-hidden">
                <Link to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <i class="bi bi-arrow-left-circle-fill fs-2"></i>
                    
                </Link>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house fs-1"></i>
                            <h5 className='text-dark'>Home</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i class="text-dark bi bi-box2-heart-fill fs-1"></i>
                            <h5 className='text-dark'>Productos</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="text-dark bi-people fs-1"></i>
                            <h5 className='text-dark'>Clientes</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                        <i class="text-dark bi bi-truck fs-1"></i>
                            <h5 className='text-dark'>Pedidos</h5>
                        </a> 
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <i class="text-dark bi bi-cash-coin fs-1"></i>
                            <h5 className='text-dark'>Pagos</h5>
                        </a>
                    </li>
                </ul>
                <div className="dropdown w-25">
                    <a href="#" className="d-flex align-items-center justify-content-center p-4 link-dark text-decoration-none dropdown-toggle ms-5" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2 fs-1 "></i>
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
            
        </div>
    </div>
</div>
  )
}

export default SideBar;