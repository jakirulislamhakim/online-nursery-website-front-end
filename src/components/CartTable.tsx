import { Minus, Plus, Trash2 } from 'lucide-react';
import {
   decrementQuantity,
   incrementQuantity,
   removeAProduct,
} from '../redux/features/addToCart/addToCartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const CartTable = () => {
   const { products } = useAppSelector((state: RootState) => state.cart);
   const dispatch = useAppDispatch();

   const handleIncrement = (id: string) => {
      dispatch(incrementQuantity(id));
   };

   const handleDecrement = (id: string) => {
      dispatch(decrementQuantity(id));
   };

   const handleRemove = (id: string) => {
      dispatch(removeAProduct(id));
   };

   return (
      <div className="overflow-x-auto  md:w-1/2 border-2">
         <table className="table w-full">
            <thead>
               <tr className="bg-gray-100">
                  <th className="text-left py-4 px-2">Product</th>
                  <th className="text-left py-4 px-2">Price</th>
                  <th className="text-left py-4 px-2">Quantity</th>
                  <th className="text-left py-4 px-2">Total</th>
                  <th className="text-left py-4 px-2">Actions</th>
               </tr>
            </thead>
            <tbody>
               {products.map(product => (
                  <tr key={product._id} className="border-b">
                     <td className="py-4 px-2">
                        <div className="flex items-center">
                           <div className="w-16 h-16 bg-gray-200 rounded-md mr-4">
                              <img src={product.image} alt="" />
                           </div>
                           <span className="font-medium">{product.title}</span>
                        </div>
                     </td>
                     <td className="py-4 px-2">${product.price.toFixed(2)}</td>
                     <td className="py-4 px-2">
                        <div className="flex items-center">
                           <button
                              className="btn btn-circle btn-sm btn-outline"
                              onClick={() => handleDecrement(product._id)}
                           >
                              <Minus size={16} />
                           </button>
                           <span className="mx-2 w-8 text-center">
                              {product.selectQuantity}
                           </span>
                           <button
                              className="btn btn-circle btn-sm btn-outline"
                              onClick={() => handleIncrement(product._id)}
                           >
                              <Plus size={16} />
                           </button>
                        </div>
                     </td>
                     <td className="py-4 px-2 font-medium">
                        ${(product.price * product.selectQuantity).toFixed(2)}
                     </td>
                     <td className="py-4 px-2">
                        <button
                           className="btn btn-ghost btn-sm text-red-500"
                           onClick={() => handleRemove(product._id)}
                        >
                           <Trash2 size={18} />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CartTable;
