import { baseApi } from '../../api/baseApi';

const products = baseApi.injectEndpoints({
   endpoints: builder => ({
      getAllProducts: builder.query({
         query: (query: Record<string, unknown>) => {
            const { category, sort, searchTerm } = query;

            const queryParams = new URLSearchParams();

            if (searchTerm) queryParams.append('searchTerm', searchTerm as string);
            if (category) queryParams.append('category', category as string);
            if (sort) queryParams.append('sort', sort as string);

            return {
               url: `/products`,
               method: 'GET',
               params: queryParams,
            };
         },
      }),
   }),
});

export const { useGetAllProductsQuery } = products;
