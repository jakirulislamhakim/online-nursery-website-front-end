import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TProduct } from '../../types';
import { useGetAllCategoryQuery } from '../../redux/features/categories/categoriesApi';
import { TCategory } from '../../types/category.types';

type TUpdateProductModalProps = {
   isModalOpen: boolean;
   setIsModalOpen: () => void;
   handleUpdateProduct: (updatedProduct: Partial<TProduct>) => Promise<void>;
   product: Partial<TProduct> | null;
   updatingLoading: boolean;
};

const UpdateProductModal = ({
   isModalOpen,
   setIsModalOpen,
   handleUpdateProduct,
   product,
   updatingLoading,
}: TUpdateProductModalProps) => {
   const { data, isLoading } = useGetAllCategoryQuery(undefined);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      if (isModalOpen && product) {
         reset({
            title: product.title || '',
            price: product.price || '',
            quantity: product.quantity || '',
            category: product.category || '',
            description: product.description || '',
            image: product.image || '',
         });
      }
   }, [isModalOpen, product, reset]);

   const onSubmit = (data: Partial<TProduct>) => {
      console.log({
         data,
      });
      handleUpdateProduct({ _id: product?._id, ...data });
      if (updatingLoading) {
         setIsModalOpen();
      }
   };

   //

   if (isLoading) {
      return null;
   }
   const categories = data?.data;

   // modal if not often then nothing will be show
   if (!isModalOpen) return null;

   return (
      <div className="modal modal-open">
         <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Title</span>
                  </label>
                  <input
                     type="text"
                     {...register('title', { required: 'Title is required' })}
                     className="input input-bordered w-full"
                  />
                  {errors.title && (
                     <span className="text-error text-sm mt-1">
                        {errors.title.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input
                     type="number"
                     step="0.01"
                     {...register('price', {
                        required: 'Price is required',
                        min: { value: 0, message: 'Price must be positive' },
                        valueAsNumber: true,
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.price && (
                     <span className="text-error text-sm mt-1">
                        {errors.price.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Quantity</span>
                  </label>
                  <input
                     type="number"
                     step="1"
                     {...register('quantity', {
                        required: 'Price is required',
                        min: { value: 0, message: 'Price must be positive' },
                        valueAsNumber: true,
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.quantity && (
                     <span className="text-error text-sm mt-1">
                        {errors.quantity.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Category</span>
                  </label>
                  <select
                     {...register('category', {
                        required: 'Category is required',
                     })}
                     className="select select-bordered w-full"
                  >
                     {categories?.map((category: TCategory) => (
                        <option value={category?.category} key={category?._id}>
                           {category?.category}
                        </option>
                     ))}
                  </select>
                  {errors.category && (
                     <span className="text-error text-sm mt-1">
                        {errors.category.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Description</span>
                  </label>
                  <textarea
                     {...register('description', {
                        required: 'Description is required',
                     })}
                     className="textarea textarea-bordered h-24"
                  ></textarea>
                  {errors.description && (
                     <span className="text-error text-sm mt-1">
                        {errors.description.message as string}
                     </span>
                  )}
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Image URL</span>
                  </label>
                  <input
                     type="url"
                     {...register('image', { required: 'Image URL is required' })}
                     className="input input-bordered w-full"
                  />
                  {errors.image && (
                     <span className="text-error text-sm mt-1">
                        {errors.image.message as string}
                     </span>
                  )}
               </div>

               <div className="modal-action">
                  <button type="button" className="btn" onClick={setIsModalOpen}>
                     Cancel
                  </button>
                  <button
                     disabled={updatingLoading}
                     type="submit"
                     className="btn btn-primary"
                  >
                     {updatingLoading ? 'Updating...' : 'Update Product'}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default UpdateProductModal;
