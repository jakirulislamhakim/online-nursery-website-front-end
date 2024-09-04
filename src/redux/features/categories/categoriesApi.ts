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
      }),
   }),
});

export const { useGetAllCategoryQuery } = products;
