import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
   return (
      <div className="flex justify-center items-center ">
         <div className="text-center py-16 ">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">Your cart is empty.</p>
            <Link to={'/products'}>
               <button className="btn btn-sm lg:btn-md btn-success text-base font-semibold text-white mt-4">
                  Start Shopping
               </button>
            </Link>
         </div>
      </div>
   );
};

export default EmptyCart;
