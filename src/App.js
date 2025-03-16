import {
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from '../src/pages/homepage/HomePage.js';
import SearchPage from './components/searchpageC/SearchPage.js';
import { CartProvider } from './context/CartContext.js';
import { WishProvider } from './context/WishContext.js';
import CartPage from './pages/cartPage/CartPage.js';
import CartPage2 from './pages/cartPage/CartPage2.js';
import CartPage3 from './pages/cartPage/CartPage3.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import ProductDetails from './pages/productDetails/ProductDetails.js';
import ProductPage from './pages/productspage/ProductsPage.js';
import SignUpPage from './pages/SignUpâge/SignUpPage.js';
import WishPage from './pages/wishpage/WishPage.js';
import ProductsPage from './pages/productspage/ProductsPage.js';
import AdminPage from './pages/adminPage/AdminPage.js';
function App() {
  return (
    <div>
    <CartProvider>
      <WishProvider>
    <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path='/details/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/pay' element={<CartPage2/>}></Route>
          <Route path='/pay3' element={<CartPage3/>}></Route>
          <Route path='/wish' element={< WishPage/>}></Route>
          <Route path='/login' element={< LoginPage/>}></Route>
          <Route path='/signup' element={< SignUpPage/>}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
</Routes>
<ToastContainer/>
</WishProvider>
</CartProvider>
    </div>
  );
}

export default App;



