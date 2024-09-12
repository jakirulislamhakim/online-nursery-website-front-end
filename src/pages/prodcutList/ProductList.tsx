import Swal from 'sweetalert2';
import {
   useDeleteAProductMutation,
   useGetAllProductsQuery,
   useUpdateAProductMutation,
} from '../../redux/features/products/productsApi';
import { TProduct } from '../../types';
import UpdateProductModal from '../../components/UpdateProductModal/UpdateProductModal';
import { useState } from 'react';

const ProductList = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);

   const { data, isLoading } = useGetAllProductsQuery({});
   const [deleteAProduct] = useDeleteAProductMutation();
   const [updateAProduct, { isLoading: updatingLoading }] =
      useUpdateAProductMutation();

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
   const products = data?.data?.products;

   const handleProductDelete = (id: string, title: string) => {
      Swal.fire({
         html: `<span style="font-size: 18px;">Are you sure you want to delete <strong>${title}</strong>?</span>`,
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         // background: '#fff',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
         if (result.isConfirmed) {
            try {
               const data = await deleteAProduct(id);

               if (data.data.success) {
                  Swal.fire({
                     title: 'Deleted!',
                     text: 'Your product has been deleted.',
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
                  title: "Can't Deleted!",
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

   const handleUpdateProduct = async (updatedProduct: Partial<TProduct>) => {
      try {
         const result = await updateAProduct(updatedProduct).unwrap();
         if (result.success) {
            Swal.fire({
               title: 'Updated!',
               text: 'The product has been updated successfully.',
               icon: 'success',
               showConfirmButton: false,
               toast: true,
               background: '#f8d7da',
               timer: 2000,
            });
         } else {
            throw new Error('Update failed');
         }
      } catch (error) {
         console.log({ error });

         Swal.fire({
            title: 'Update Failed',
            text: 'There was an error updating the product.',
            icon: 'error',
            showConfirmButton: false,
            toast: true,
            background: '#f8d7da',
            timer: 3000,
         });
      }
      if (!updatingLoading) {
         setIsModalOpen(false);
      }
   };

   const handleEditClick = (product: TProduct) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
   };

   return (
      <div className="overflow-x-auto w-full">
         <table className="table w-full">
            <thead>
               <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {products?.map((product: TProduct, idx: number) => (
                  <tr key={product?._id} className="hover">
                     <td>{idx + 1}</td>
                     <td>
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <img src={product?.image} alt={product?.title} />
                           </div>
                        </div>
                     </td>
                     <td>
                        <div className="font-bold">{product?.title}</div>
                     </td>
                     <td>{product?.category}</td>
                     <td>${product?.price.toFixed(2)}</td>
                     <td>{product?.quantity}</td>
                     <td>
                        <div className="flex flex-nowrap gap-2">
                           <button
                              onClick={() => handleEditClick(product)}
                              className="btn btn-xs sm:btn-sm btn-primary whitespace-nowrap"
                           >
                              Edit
                           </button>
                           <button
                              onClick={() =>
                                 handleProductDelete(product._id, product?.title)
                              }
                              className="btn btn-xs sm:btn-sm btn-error whitespace-nowrap"
                           >
                              Delete
                           </button>
                        </div>
                     </td>
                     {/* <UpdateProductModal
                        isOpen={true}
                        product={product}
                     ></UpdateProductModal> */}
                  </tr>
               ))}
            </tbody>
         </table>

         <UpdateProductModal
            isModalOpen={isModalOpen}
            setIsModalOpen={() => setIsModalOpen(false)}
            handleUpdateProduct={handleUpdateProduct}
            product={selectedProduct}
            updatingLoading={updatingLoading}
         />
      </div>
   );
};

export default ProductList;
