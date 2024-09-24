import { SubmitHandler, useForm } from 'react-hook-form';
import { useGetAllCategoryQuery } from '../../redux/features/categories/categoriesApi';
import { TCategory } from '../../types/category.types';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { TAddNewProduct } from '../../types';
import { useCreateAProductsMutation } from '../../redux/features/products/productsApi';
import Swal from 'sweetalert2';
import PageTitle from '../../components/PageTitle';

const ProductAddForm = () => {
   const [rating, setRating] = useState(0);
   const [ratingErrMsg, setRatingErrMsg] = useState('');
   const { data, isLoading } = useGetAllCategoryQuery(undefined);
   const [createAProduct, { isLoading: productAdding }] =
      useCreateAProductsMutation();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<TAddNewProduct>();

   const onSubmit: SubmitHandler<TAddNewProduct> = async (data: TAddNewProduct) => {
      if (!rating) {
         return setRatingErrMsg('rating is reburied');
      }

      const {
         price: priceString,
         quantity: quantityString,
         ...remainingProduct
      } = data;
      const price = Number(priceString);
      const quantity = Number(quantityString);

      const productData = { ...remainingProduct, price, quantity, rating };

      try {
         const res = await createAProduct(productData).unwrap();

         if (res?.success) {
            Swal.fire({
               title: 'Success',
               text: 'Product created successfully!',
               icon: 'success',
               toast: true,
               position: 'center',
               showConfirmButton: false,
               background: '#f8d7da',
               timer: 2000,
            });
         }

         reset();
      } catch (error) {
         console.error('Error creating product:', error);

         Swal.fire({
            title: 'Error',
            text: 'There was an error creating the product',
            icon: 'error',
            toast: true,
            position: 'center',
            showConfirmButton: false,
            background: '#f8d7da',
            timer: 3000,
         });
      }
   };

   if (isLoading) return null;
   const categories = data?.data;

   return (
      <>
         <PageTitle title="Add Product" />
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 md:w-3/4 lg:w-1/2 mx-auto border-2 p-4 rounded-lg shadow-lg border-green-200 m-2 mb-10"
         >
            <div>
               <h2 className="text-2xl md:text-3xl text-center font-semibold text-green-700">
                  Add Product
               </h2>
            </div>
            <div>
               <label htmlFor="category" className="label">
                  <span className="label-text">Category</span>
               </label>
               <select
                  id="category"
                  {...register('category', { required: 'Category is required' })}
                  className="select select-bordered w-full select-sm md:select-md"
                  defaultValue={''}
               >
                  <option value={''} disabled>
                     Select a category
                  </option>
                  {categories?.map((category: TCategory) => (
                     <option value={category?.category} key={category._id}>
                        {category?.category}
                     </option>
                  ))}
               </select>
               {errors.category && (
                  <p className="text-red-500">{errors.category.message as string}</p>
               )}
            </div>

            <div>
               <label htmlFor="title" className="label">
                  <span className="label-text">Title</span>
               </label>
               <input
                  id="title"
                  type="text"
                  placeholder="sort product title"
                  {...register('title', { required: 'Title is required' })}
                  className="input input-bordered w-full input-sm md:input-md"
               />
               {errors.title && (
                  <p className="text-red-500">{errors.title.message as string}</p>
               )}
            </div>

            <div>
               <label htmlFor="price" className="label">
                  <span className="label-text">Price</span>
               </label>
               <input
                  id="price"
                  placeholder="product price"
                  type="number"
                  {...register('price', {
                     required: 'Price is required',
                     min: { value: 0, message: 'Price must be at least 0' },
                  })}
                  className="input input-bordered w-full input-sm md:input-md"
               />
               {errors.price && (
                  <p className="text-red-500">{errors.price.message as string}</p>
               )}
            </div>

            <div>
               <label htmlFor="quantity" className="label">
                  <span className="label-text">Quantity</span>
               </label>
               <input
                  id="quantity"
                  type="number"
                  placeholder="product quantity"
                  {...register('quantity', {
                     required: 'Quantity is required',
                     min: { value: 0, message: 'Quantity must be at least 0' },
                  })}
                  className="input input-bordered w-full input-sm md:input-md"
               />
               {errors.quantity && (
                  <p className="text-red-500">{errors.quantity.message as string}</p>
               )}
            </div>

            <div>
               <label htmlFor="description" className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea
                  id="description"
                  placeholder="product description"
                  {...register('description', {
                     required: 'Description is required',
                  })}
                  className="textarea textarea-bordered w-full"
               ></textarea>
               {errors.description && (
                  <p className="text-red-500">
                     {errors.description.message as string}
                  </p>
               )}
            </div>

            <div>
               <label htmlFor="rating" className="label">
                  <span className="label-text">Rating</span>
               </label>
               {/* <input
               id="rating"
               type="number"
               {...register('rating', {
                  required: 'Rating is required',
                  min: { value: 0, message: 'Rating must be between 0 and 5' },
                  max: { value: 5, message: 'Rating must be between 0 and 5' },
               })}
               className="input input-bordered w-full"
            /> */}
               <StarRatings
                  rating={rating}
                  starRatedColor="green"
                  starHoverColor="green"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0px"
                  starEmptyColor="gray"
                  changeRating={value => setRating(value)}
               />
               {!rating && <p className="text-red-500">{ratingErrMsg}</p>}
            </div>

            <div>
               <label htmlFor="image" className="label">
                  <span className="label-text">Image</span>
               </label>
               <input
                  id="image"
                  type="url"
                  {...register('image', { required: 'Image URL is required' })}
                  className="input input-bordered w-full input-sm md:input-md"
                  placeholder="product image URL"
               />
               {errors.image && (
                  <p className="text-red-500">{errors.image.message as string}</p>
               )}
            </div>

            <div className="flex justify-center">
               <button
                  type="submit"
                  className="btn btn-sm lg:btn-md btn-success text-base font-semibold text-white mt-2"
                  disabled={productAdding}
               >
                  {productAdding ? 'Adding...' : 'Add Product'}
               </button>
            </div>
         </form>
      </>
   );
};

export default ProductAddForm;
