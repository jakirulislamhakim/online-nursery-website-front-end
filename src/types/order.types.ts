export const Payment_Method = {
   CASHONDELIVERY: 'cashOnDelivery',
   STRIPE: 'stripe',
} as const;

export type TOrderItem = {
   productId: string;
   productName: string;
   quantity: number;
   price: number;
   totalPrice: number;
};

export type TCreateOrder = {
   fullName: string;
   email: string;
   phoneNumber: string;
   city: string;
   address: string;
   paymentMethod: (typeof Payment_Method)[keyof typeof Payment_Method];
   orderItems: TOrderItem[];
   totalPrice: number;
   shippingCost: number;
};
