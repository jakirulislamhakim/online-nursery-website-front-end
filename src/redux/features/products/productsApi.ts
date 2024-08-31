import { baseApi } from '../../api/baseApi';

const products = baseApi.injectEndpoints({
   endpoints: builder => ({
      getAllProducts: builder.query({
         query: () => ({
            url: '/products',
            method: 'GET',
         }),
      }),
   }),
});

export const { useGetAllProductsQuery } = products;
