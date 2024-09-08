import Swal from 'sweetalert2';
import {
   useDeleteAProductMutation,
   useGetAllProductsQuery,
} from '../../redux/features/products/productsApi';
import { TProduct } from '../../types';

const ProductList = () => {
   const { data, isLoading } = useGetAllProductsQuery({});
   const [deleteAProduct] = useDeleteAProductMutation();

   if (isLoading) {
      return <p>Loading....</p>;
   }
   const { products } = data.data;

   const handleDelete = (id: string, title: string) => {
      Swal.fire({
         html: `<span style="font-size: 18px;">Are you sure you want to delete <strong>${title}</strong>?</span>`,
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
         if (result.isConfirmed) {
            const data = await deleteAProduct(id);

            if (data.data.success) {
               Swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
               });
            }
         }
      });
   };

   return (
      <div className="overflow-x-auto w-full">
         <table className="table w-full">
            <thead>
               <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {products?.map((product: TProduct) => (
                  <tr key={product?._id} className="hover">
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
                     <td>${product?.price.toFixed(2)}</td>
                     <td>{product?.category}</td>
                     <td>
                        <div className="flex flex-nowrap gap-2">
                           <button className="btn btn-xs sm:btn-sm btn-primary whitespace-nowrap">
                              Edit
                           </button>
                           <button
                              onClick={() =>
                                 handleDelete(product?._id, product?.title)
                              }
                              className="btn btn-xs sm:btn-sm btn-error whitespace-nowrap"
                           >
                              Delete
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ProductList;
