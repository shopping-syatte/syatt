import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import SectionLayout from './pages/SectionLayout.jsx';
import Home from './pages/Home.jsx';
import CategoryProducts from './pages/CategoryProducts.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NewProducts from './pages/NewProducts.jsx';
import Cart from './pages/Cart.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import NotFound from './pages/NotFound.jsx';
import { CheckoutPage } from './components/Checkout.jsx';
import { SuccessPage } from './components/Success.jsx';
import { FailPage } from './components/Fail.jsx';
import Class from './pages/Class.jsx';
import AdminLayout from './pages/AdminLayout.jsx';
import AdminProducts from './pages/AdminProducts.jsx';
import Admin from './pages/Admin.jsx';
import AdminUser from './pages/AdminUser.jsx';
import AdminSales from './pages/AdminSales.jsx';
import AdminNewProduct from './pages/AdminNewProduct.jsx'
import AdminProductEdit from './pages/AdminProductEdit.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<SectionLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/category/:category"
            element={<CategoryProducts />}
          />
        </Route>
        <Route
          path="/carts"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/class"
          element={
            <ProtectedRoute>
              <Class />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/new"
          element={
            <ProtectedRoute requireAdmin="true">
              <NewProducts />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
        <Route element={
          <ProtectedRoute requireAdmin="true">
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin" element={<Admin />} />
          <Route path="/productmanage" element={<AdminProducts />} />
          <Route path="/user" element={<AdminUser />} />
          <Route path="/salelist" element={<AdminSales />} />
          <Route path="/newproduct" element={<AdminNewProduct/>}/>
          <Route path="/productEdit/:id" element={<AdminProductEdit/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
