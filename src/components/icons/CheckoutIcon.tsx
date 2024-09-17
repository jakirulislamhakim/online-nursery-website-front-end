import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const CheckoutIcon = () => {
   const navigate = useNavigate();
   const { products } = useAppSelector((state: RootState) => state.cart);

   return (
      <div className="relative">
         {products.length > 0 && (
            <div className="badge absolute -top-2 -right-2">{products.length}</div>
         )}

         {/* Cart button */}
         <button
            className="btn btn-sm lg:btn-md btn-success text-base font-semibold text-white"
            onClick={() => navigate('/cart')}
         >
            <ShoppingCart />
         </button>
      </div>
   );
};

export default CheckoutIcon;
