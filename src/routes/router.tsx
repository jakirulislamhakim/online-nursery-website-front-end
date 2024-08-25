import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../pages/cart/Cart';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/cart',
            element: <Cart />,
         },
      ],
   },
]);

export default router;
