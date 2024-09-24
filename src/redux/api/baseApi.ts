import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
   reducerPath: 'baseApi',
   tagTypes: ['product', 'category'],
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://online-nursery-backend-jade.vercel.app/api/v1/',
   }),
   endpoints: () => ({}),
});
