import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Product from '../pages/product/Product';

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
]);

export default router;
