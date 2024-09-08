import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Product from '../pages/product/Product';
import Dashboard from '../components/layouts/Dashboard';

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
      path: 'dashboard',
      element: <Dashboard />,
   },
]);

export default router;
