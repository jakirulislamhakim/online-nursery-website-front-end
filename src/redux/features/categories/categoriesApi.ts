import { baseApi } from '../../api/baseApi';

const products = baseApi.injectEndpoints({
   endpoints: builder => ({
      getAllCategory: builder.query({
         query: () => {
            return {
               url: '/categories',
               method: 'GET',
            };
         },
         providesTags: ['category'],
      }),
      createACategory: builder.mutation({
         query: body => {
            return {
               url: '/categories',
               method: 'POST',
               body,
            };
         },
         invalidatesTags: ['category'],
      }),
      deleteACategory: builder.mutation({
         query: (id: string) => {
            return {
               url: `/categories/${id}`,
               method: 'DELETE',
            };
         },
         invalidatesTags: ['category'],
      }),
   }),
});

export const {
   useGetAllCategoryQuery,
   useDeleteACategoryMutation,
   useCreateACategoryMutation,
} = products;
