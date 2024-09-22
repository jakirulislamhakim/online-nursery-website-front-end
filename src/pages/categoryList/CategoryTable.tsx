import { Package, Trash2 } from 'lucide-react';
import {
   useDeleteACategoryMutation,
   useGetAllCategoryQuery,
} from '../../redux/features/categories/categoriesApi';
import { TCategory } from '../../types/category.types';
import Swal from 'sweetalert2';

const CategoryTable = () => {
   const { data, isLoading } = useGetAllCategoryQuery(undefined);
   const [deleteACategory] = useDeleteACategoryMutation();

   if (isLoading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
         </div>
      );
   }
   const categories = data?.data;

   const handleDeleteCategory = async (id: string, category: string) => {
      Swal.fire({
         html: `<span style="font-size: 18px;">Are you sure you want to delete <strong>${category}</strong>?</span>`,
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         // background: '#fff',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
         if (result.isConfirmed) {
            try {
               const res = await deleteACategory(id).unwrap();

               if (res.success) {
                  Swal.fire({
                     title: 'Deleted!',
                     text: 'Your category has been deleted.',
                     icon: 'success',
                     showConfirmButton: false,
                     toast: true,
                     background: '#f8d7da',
                     timer: 3000,
                  });
               }
            } catch (error) {
               console.log(error);
               Swal.fire({
                  title: "Can't deleted category!",
                  text: 'Something went wrong',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  background: '#f8d7da',
                  timer: 3000,
               });
            }
         }
      });
   };

   return (
      <>
         <div className=" flex justify-center items-center flex-col my-4 md:mb-8 md:mt-5 border-b-2 pb-2">
            <h1 className="text-xl  md:text-3xl font-bold text-green-400 flex items-center">
               <Package className="mr-2" size={32} />
               Category Management
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mt-2">
               View, add, remove and manage your nursery products category here.
            </p>
         </div>
         <div className="overflow-x-auto md:w-1/2 w-full mx-auto border p-4 m-4 rounded-lg shadow-xl border-green-300">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>No.</th>
                     <th>Category</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {categories?.map((category: TCategory, idx: number) => (
                     <tr key={category._id} className="hover">
                        <td>{idx + 1}</td>
                        <td>
                           <div className="font-bold">{category?.category}</div>
                        </td>
                        <td>
                           <button
                              onClick={() =>
                                 handleDeleteCategory(
                                    category?._id,
                                    category?.category
                                 )
                              }
                              className="btn btn-sm btn-success text-base font-semibold text-white"
                           >
                              <Trash2 size={16} />
                           </button>
                           {/* <div className="flex space-x-2"></div> */}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>{' '}
      </>
   );
};

export default CategoryTable;
