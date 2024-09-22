import { SubmitHandler, useForm } from 'react-hook-form';
import { PlusCircle, AlertTriangle } from 'lucide-react';
import { useCreateACategoryMutation } from '../../redux/features/categories/categoriesApi';
import Swal from 'sweetalert2';

type TCreateCategory = {
   category: string;
};

const CategoryAddForm = () => {
   const [createACategory] = useCreateACategoryMutation();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
   } = useForm<TCreateCategory>();

   const onSubmit: SubmitHandler<TCreateCategory> = async (
      data: TCreateCategory
   ) => {
      try {
         const res = await createACategory(data).unwrap();

         if (res.success) {
            Swal.fire({
               title: 'Success',
               text: 'Category created successfully!',
               icon: 'success',
               toast: true,
               position: 'top',
               showConfirmButton: false,
               background: '#f8d7da',
               timer: 2000,
            });
            reset();
         }
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         console.log(error);
         Swal.fire({
            title: 'Error',
            text: error?.data?.message || 'There was an error creating the product',
            icon: 'error',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            background: '#f8d7da',
            timer: 3000,
         });
      }
   };

   return (
      <div className="mt-20 ">
         <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto border-green-300 border">
            <div className="card-body">
               <h2 className="card-title text-green-800">Add New Category</h2>
               <div className="alert alert-warning shadow-lg mb-4">
                  <div className="flex gap-1">
                     <AlertTriangle />
                     <span className="text-[10px]">
                        Warning: Categories cannot be updated once added. Please add
                        carefully.
                     </span>
                  </div>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Category Name</span>
                     </label>
                     <input
                        type="text"
                        placeholder="Enter category name"
                        className={`input input-bordered w-full ${
                           errors.category ? 'input-error' : ''
                        }`}
                        {...register('category', {
                           required: 'Category name is required',
                           minLength: {
                              value: 2,
                              message: 'Category name must be at least 2 characters',
                           },
                        })}
                     />
                     {errors.category && (
                        <label className="label">
                           <span className="label-text-alt text-error">
                              {errors.category.message as string}
                           </span>
                        </label>
                     )}
                  </div>
                  <div className="card-actions justify-end">
                     <button
                        type="submit"
                        className={`btn btn-sm lg:btn-md btn-success text-base font-semibold text-white ${
                           isSubmitting ? 'loading' : ''
                        }`}
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? (
                           'Adding...'
                        ) : (
                           <>
                              <PlusCircle className="mr-2" size={20} />
                              Add Category
                           </>
                        )}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default CategoryAddForm;
