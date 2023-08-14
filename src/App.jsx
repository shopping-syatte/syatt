import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import AllProducts from './pages/AllProducts.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NewProducts from './pages/NewProducts.jsx';
import Cart from './pages/Cart.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/carts' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path='/products/new' element={
          <ProtectedRoute requireAdmin='true'>
            <NewProducts />
          </ProtectedRoute>
        } />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
