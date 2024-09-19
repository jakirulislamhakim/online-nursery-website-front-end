import { TCreateOrder } from '../../../types';
import { baseApi } from '../../api/baseApi';

const orders = baseApi.injectEndpoints({
   endpoints: builder => ({
      createAOrder: builder.mutation({
         query: (body: TCreateOrder) => {
            return {
               url: '/orders',
               method: 'POST',
               body,
            };
         },
      }),
   }),
});

export const { useCreateAOrderMutation } = orders;
