import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import {
   Payment_Method,
   TCheckoutFormData,
   TCreateOrder,
   TOrderItem,
} from '../types';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { useCreateAOrderMutation } from '../redux/features/order/orderApi';
import Swal from 'sweetalert2';

type TCheckoutModalProps = {
   isOpenModal: boolean;
   setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutModal = ({ isOpenModal, setIsOpenModal }: TCheckoutModalProps) => {
   const { products, shippingCost, totalPrice } = useAppSelector(
      (state: RootState) => state.cart
   );
   const [createAOrder] = useCreateAOrderMutation();

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<TCheckoutFormData>();

   const onSubmit = async (data: TCheckoutFormData) => {
      const orderItems: TOrderItem[] = products.map(product => {
         const { _id, price, selectQuantity, title } = product;
         // every single order info
         const orderItem: TOrderItem = {
            productId: _id,
            price,
            productName: title,
            quantity: selectQuantity,
            totalPrice: price * selectQuantity,
         };
         return orderItem;
      });

      const orderData: TCreateOrder = {
         ...data,
         totalPrice,
         shippingCost,
         orderItems,
      };

      try {
         const response = await createAOrder(orderData).unwrap();
         console.log(response);
         if (response.success) {
            Swal.fire({
               icon: 'success',
               title: 'Order Placed Successfully!',
               html: `
                 <p>Please remember your orderId</p>
                 <p><strong>Order ID:</strong> ${response.data.orderId}</p>
                 <p><strong>Total:</strong> $${totalPrice.toFixed(2)}</p>
                 <p><strong>Status:</strong> ${response.data.orderStatus}</p>
                 <p><strong>Payment:</strong> ${response.data.paymentStatus}</p>
               `,
               toast: true,
               position: 'center',
               showConfirmButton: false,
               timer: 6000,
               timerProgressBar: true,
               didOpen: toast => {
                  toast.addEventListener('mouseenter', Swal.stopTimer);
                  toast.addEventListener('mouseleave', Swal.resumeTimer);
               },
            });
         }
         setIsOpenModal(false);
         reset();
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         let errorMessage =
            error.data.message || 'An unexpected error occurred. Please try again.';
         if (error instanceof Error) {
            errorMessage = error.message;
         }
         Swal.fire({
            icon: 'error',
            title: 'Order Placement Failed',
            text: errorMessage,
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
         });
      }
   };

   if (!isOpenModal) return null;

   return (
      <div className="modal modal-open">
         <div className="modal-box relative max-w-md">
            <button
               className="btn btn-sm btn-circle absolute right-2 top-2"
               onClick={() => setIsOpenModal(false)}
            >
               <X size={16} />
            </button>
            <h3 className="font-bold text-lg mb-4">Complete Your Order</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Full Name</span>
                  </label>
                  <input
                     type="text"
                     {...register('fullName', { required: 'Full name is required' })}
                     className="input input-bordered w-full"
                  />
                  {errors.fullName && (
                     <span className="text-error text-sm mt-1">
                        {errors.fullName.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input
                     type="email"
                     {...register('email', {
                        required: 'Email is required',
                        pattern: {
                           value: /^\S+@\S+$/i,
                           message: 'Invalid email address',
                        },
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.email && (
                     <span className="text-error text-sm mt-1">
                        {errors.email.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Phone Number</span>
                  </label>
                  <input
                     type="tel"
                     {...register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                           value: /\b(\+8801[3-9]\d{8}|01[3-9]\d{8})\b/,
                           message: 'Invalid phone number',
                        },
                     })}
                     className="input input-bordered w-full"
                     placeholder="01"
                     defaultValue={'01'}
                  />
                  {errors.phoneNumber && (
                     <span className="text-error text-sm mt-1">
                        {errors.phoneNumber.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">City</span>
                  </label>
                  <select
                     {...register('city', { required: 'City is required' })}
                     className="select select-bordered w-full"
                  >
                     <option value="">Select a city</option>
                     <option value="dhaka">Dhaka</option>
                     <option value="mymensingh">Mymensingh</option>
                     <option value="chattogram">Chattogram</option>
                     <option value="khulna">Khulna</option>
                     <option value="rajshahi">Rajshahi</option>
                     <option value="barishal">Barishal</option>
                     <option value="sylhet">Sylhet</option>
                     <option value="rangpur">Rangpur</option>
                  </select>
                  {errors.city && (
                     <span className="text-error text-sm mt-1">
                        {errors.city.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Address</span>
                  </label>
                  <input
                     type="text"
                     className="input input-bordered w-full"
                     {...register('address', { required: 'Address is required' })}
                  ></input>
                  {errors.address && (
                     <span className="text-error text-sm mt-1">
                        {errors.address.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Payment Method</span>
                  </label>
                  <div className="flex flex-col gap-2">
                     <label className="flex items-center">
                        <input
                           type="radio"
                           value={Payment_Method.STRIPE}
                           disabled
                           {...register('paymentMethod', {
                              required: 'Payment method is required',
                           })}
                           className="radio radio-primary mr-2"
                        />
                        <span className="label-text">Stripe (Coming Soon)</span>
                     </label>
                     <label className="flex items-center">
                        <input
                           type="radio"
                           value={Payment_Method.CASHONDELIVERY}
                           {...register('paymentMethod', {
                              required: 'Payment method is required',
                           })}
                           className="radio radio-primary mr-2"
                        />
                        <span className="label-text">Cash on Delivery</span>
                     </label>
                  </div>
                  {errors.paymentMethod && (
                     <span className="text-error text-sm mt-1">
                        {errors.paymentMethod.message as string}
                     </span>
                  )}
               </div>

               <div className="bg-base-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Order Summary</h4>
                  <p>Total:{totalPrice.toFixed(2)} TK</p>
               </div>

               <div className="modal-action">
                  <button
                     type="submit"
                     className={`btn btn-sm lg:btn-md btn-success font-semibold text-white ${
                        isSubmitting ? 'loading' : ''
                     }`}
                     disabled={isSubmitting}
                  >
                     Place Order
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default CheckoutModal;
