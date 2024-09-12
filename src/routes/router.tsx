import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Product from '../pages/product/Product';
import Dashboard from '../components/layouts/Dashboard';
import ProductList from '../pages/prodcutList/ProductList';
import ProductAddForm from '../components/productAddForm/ProductAddForm';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'products',
            element: <Product />,
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
      ],
   },
]);

export default router;
