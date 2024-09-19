import { Payment_Method } from './order.types';

export type TCheckoutFormData = {
   fullName: string;
   email: string;
   phoneNumber: string;
   city: string;
   address: string;
   paymentMethod: (typeof Payment_Method)[keyof typeof Payment_Method];
};
