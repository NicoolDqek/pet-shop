import './details.css';

import {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  doc,
  getDoc,
} from 'firebase/firestore';
import {
  Link,
  useParams,
} from 'react-router-dom';
import {
  Bounce,
  toast,
} from 'react-toastify';

import { db } from '../../../src/firebase/FireBase';
import { CartContext } from '../../context/CartContext';

const Details = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [mainImage, setMainImage] = useState(''); // Estado para la imagen principal
 const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const obtenerProducto = async   () => {
      const docRef = doc(db, 'Producto', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const productoData = { id: docSnap.id, ...docSnap.data() };
        setProducto(productoData);
        setMainImage(productoData.img_principal);  
      } else {
        console.log('El producto no existe');
      }
    };
    obtenerProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const precioFormateadoOriginal = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(producto.precio_original);

  const precioFormateado = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(producto.precio);
  
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
    const handleAddToCart = () => {
    addToCart(producto); // Añadir el producto al carrito
    notifyc()
  };
  return (
    <div className='d-flex flex-column'>
      <div className='path container'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/'>Inicio</Link></li>
            <li className="breadcrumb-item"><Link to="/products">Productos</Link></li>
            <li className="breadcrumb-item"><Link href="">Para {producto.destinatario}</Link></li>
            <li className="breadcrumb-item" aria-current="page">{producto.nombre}</li>
          </ol>
        </nav>
      </div>
      
      <div className='section-details container'>
        <div className='left'>
          
          <div className='gallery'>
            <div className='imgG'>
              
              <img
                src={producto.img_gallery1}
                alt="Imagen 1"
                onClick={() => setMainImage(producto.img_gallery1)} // Cambia la imagen principal
                className={mainImage === producto.img_gallery1 ? 'selected' : ''}
              />
            </div>
             <div className='imgG'>
              
              <img
                src={producto.img_principal}
                alt="Imagen 1"
                onClick={() => setMainImage(producto.img_principal)} // Cambia la imagen principal
                className={mainImage === producto.img_principal? 'selected' : ''}
              />
            </div>
            <div className='imgG'>
             
              <img
                src={producto.img_gallery2}
                alt="Imagen 2"
                onClick={() => setMainImage(producto.img_gallery2)}
                className={mainImage === producto.img_gallery2 ? 'selected' : ''}
              />
            </div>
            <div className='imgG'>
              {/* Miniatura 3 */}
              <img
                src={producto.img_gallery3}
                alt="Imagen 3"
                onClick={() => setMainImage(producto.img_gallery3)} // Cambia la imagen principal
                className={mainImage === producto.img_gallery3 ? 'selected' : ''}
              />
            </div>
          </div>

          <div className='container mainImg'>
            {/* Imagen principal */}
            <img
              src={mainImage}
              alt={producto.nombre}
              className="main-image"
              onClick={() => setMainImage(producto.imagen_principal)} // Permitir volver a la imagen principal
            />
          </div>
        </div>

        {/* Sección de información */}
        <div className='container right'>
          <div className='contenido'>
            <h6>Stock</h6>
            <h4>{producto.nombre}</h4>
            <div className='filtros'>
              <span>340g</span>
              <span>2K</span>
              <span>6K</span>
            </div>
            <h5>{precioFormateadoOriginal}</h5>
            <h2>{precioFormateado}</h2>
            <div className='botones'>
              <button onClick={handleAddToCart}>Añadir a la cesta</button>
              <i className="bi bi-suit-heart"></i>
            </div>
          </div>
        </div>
      </div>

      <div className='container pdetails'>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sobre el Producto</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Composición</button>
            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Características</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">{producto.descripcion}</div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <table className="table table-striped ct">
              <tbody>
                <tr>
                  <th scope="row">SKU</th>
                  <td>N/A</td>
                </tr>
                <tr>
                  <th scope="row">Etapa de Vida</th>
                  <td>{producto.etapa_vida}</td>
                </tr>
                <tr>
                  <th scope="row">Sabor Primario</th>
                  <td>{producto.sabor_primario}</td>
                </tr>
                <tr>
                  <th scope="row">Marca</th>
                  <td>{producto.marca}</td>
                </tr>
                <tr>
                  <th scope="row">Días de Envío</th>
                  <td>N/A</td>
                </tr>
                <tr>
                  <th scope="row">Peso</th>
                  <td>34lb</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <table className="table table-borderless ct">
              <tbody>
                <tr>
                  <th scope="row">Estado</th>
                  <td>Un artículo totalmente nuevo, sin usar, sin abrir y sin daños.</td>
                  <th>Estado del Artículo</th>
                  <td>Nuevo</td>
                </tr>
                <tr>
                  <th scope="row">Marca</th>
                  <td>{producto.marca}</td>
                  <th>Tipo</th>
                  <td>{producto.tipo_producto}</td>
                </tr>
                <tr>
                  <th scope="row">Etapa de vida</th>
                  <td>{producto.etapa_vida}</td>
                  <th>Ingrediente Principal</th>
                  <td>{producto.sabor_primario}</td>
                </tr>
                <tr>
                  <th scope="row">Código Postal</th>
                  <td>No aplica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
