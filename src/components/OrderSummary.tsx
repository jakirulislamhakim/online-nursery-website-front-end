import { useState } from 'react';
import { clearCart } from '../redux/features/addToCart/addToCartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import CheckoutModal from './CheckoutModal';

const OrderSummary = () => {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const { totalPrice, shippingCost } = useAppSelector(
      (state: RootState) => state.cart
   );
   const dispatch = useAppDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
   };

   return (
      <div className="flex flex-col md:w-1/2 gap-2 border-2">
         <div className="w-full  mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-4 text-center">Order Summary</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
               <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${(totalPrice - shippingCost).toFixed(2)}</span>
               </div>
               <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
               </div>
               <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
               </div>
            </div>
         </div>
         <div className="w-full items-stretch">
            <button
               onClick={() => setIsOpenModal(true)}
               className="btn btn-primary btn-block mb-2"
            >
               Proceed to Checkout
            </button>
            <button className="btn btn-outline btn-block" onClick={handleClearCart}>
               Clear Cart
            </button>
         </div>
         <CheckoutModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      </div>
   );
};

export default OrderSummary;
