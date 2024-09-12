import { TAddNewProduct, TProduct } from '../../../types';
import { baseApi } from '../../api/baseApi';

const products = baseApi.injectEndpoints({
   endpoints: builder => ({
      createAProducts: builder.mutation({
         query: (body: TAddNewProduct & { rating: number }) => {
            return {
               url: `/products`,
               method: 'POST',
               body,
            };
         },
         invalidatesTags: ['product'],
      }),
      getAllProducts: builder.query({
         query: (query: Record<string, unknown>) => {
            const { category, sort, searchTerm, page, limit } = query;

            const queryParams = new URLSearchParams();

            if (searchTerm) queryParams.append('searchTerm', searchTerm as string);
            if (category) queryParams.append('category', category as string);
            if (page) queryParams.append('page', page as string);
            if (limit) queryParams.append('limit', limit as string);
            if (sort) queryParams.append('sort', sort as string);

            return {
               url: `/products`,
               method: 'GET',
               params: queryParams,
            };
         },
         providesTags: ['product'],
      }),
      deleteAProduct: builder.mutation({
         query: (id: string) => {
            return {
               url: `/products/${id}`,
               method: 'DELETE',
            };
         },
         invalidatesTags: ['product'],
      }),
      updateAProduct: builder.mutation({
         query: (data: Partial<TProduct>) => {
            const { _id, ...updatedProduct } = data;

            return {
               url: `/products/${_id}`,
               method: 'PATCH',
               body: updatedProduct,
            };
         },
         invalidatesTags: ['product'],
      }),
   }),
});

export const {
   useGetAllProductsQuery,
   useDeleteAProductMutation,
   useUpdateAProductMutation,
   useCreateAProductsMutation,
} = products;
