import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { TCheckoutFormData } from '../types/checkoutFormData.types';

type TCheckoutModalProps = {
   isOpenModal: boolean;
   setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
   totalPrice: number;
};

const CheckoutModal = ({
   isOpenModal,
   setIsOpenModal,
   totalPrice,
}: TCheckoutModalProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TCheckoutFormData>();

   const onSubmit = (data: TCheckoutFormData) => {
      console.log(data);
      // Here you would typically send the data to your backend
      setIsOpenModal(false);
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

               <div className="bg-base-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Order Summary</h4>
                  <p>Total:{totalPrice.toFixed(2)} TK</p>
               </div>

               <div className="modal-action">
                  <button type="submit" className="btn btn-primary w-full">
                     Place Order
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default CheckoutModal;
