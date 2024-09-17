import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
   const navigate = useNavigate();

   return (
      <div className="flex justify-center items-center ">
         <div className="text-center py-16 ">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">Your cart is empty.</p>
            <button
               onClick={() => navigate('/products')}
               className="btn btn-primary mt-4"
            >
               Start Shopping
            </button>
         </div>
      </div>
   );
};

export default EmptyCart;
