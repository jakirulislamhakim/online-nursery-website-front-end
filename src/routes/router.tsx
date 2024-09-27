import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Product from '../pages/product/Product';
import Dashboard from '../components/layouts/Dashboard';
import ProductList from '../pages/prodcutList/ProductList';
import ProductAddForm from '../pages/productAddForm/ProductAddForm';
import CategoryTable from '../pages/categoryList/CategoryTable';
import CategoryAddForm from '../pages/categoryAddForm/CategoryAddForm';
import Cart from '../pages/cart/Cart';
import ErrorPage from '../pages/ErrorPage/ErrorPage.js';
import ProductDetails from '../pages/productDetails/ProductDetails.js';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'products',
            element: <Product />,
         },
         {
            path: 'products/:id',
            element: <ProductDetails />,
         },
      ],
   },
   {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
         // {
         //    index: true,
         //    element: <ProductList />,
         // },
         {
            path: 'product-table',
            element: <ProductList />,
         },
         {
            path: 'add-product',
            element: <ProductAddForm />,
         },
         {
            path: 'category-table',
            element: <CategoryTable />,
         },
         {
            path: 'add-category',
            element: <CategoryAddForm />,
         },
      ],
   },
   {
      path: '/cart',
      element: <Cart />,
   },
]);

export default router;
