import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from '../../../types';

interface TCartState {
   products: (TProduct & { selectQuantity: number })[];
   totalPrice: number;
   shippingCost: number;
}

const initialState: TCartState = {
   products: [],
   totalPrice: 0,
   shippingCost: 49,
};

const calculateTotalPrice = (products: (TProduct & { selectQuantity: number })[]) =>
   products.reduce((acc, item) => {
      return Number((acc + item.price * item.selectQuantity).toFixed(2));
   }, 0);

const addToCartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (
         state,
         actions: PayloadAction<TProduct & { selectQuantity: number }>
      ) => {
         const products = state.products;
         const existProduct = products.find(
            product => product._id === actions.payload._id
         );

         if (existProduct) {
            if (actions.payload.quantity > existProduct.selectQuantity) {
               existProduct.selectQuantity += 1;
            }
         } else {
            products.push(actions.payload);
         }

         // include shipping amount
         state.totalPrice = calculateTotalPrice(state.products) + state.shippingCost;
      },
      incrementQuantity: (state, actions: PayloadAction<string>) => {
         const product = state.products.find(
            product => product._id === actions.payload
         );
         if (product && product.quantity > product.selectQuantity) {
            product.selectQuantity += 1;
         }

         // include shipping amount
         state.totalPrice = calculateTotalPrice(state.products) + state.shippingCost;
      },
      decrementQuantity: (state, actions: PayloadAction<string>) => {
         const product = state.products.find(
            product => product._id === actions.payload
         );
         if (product && product.selectQuantity > 1) {
            product.selectQuantity -= 1;
         }

         // include shipping amount
         state.totalPrice = calculateTotalPrice(state.products) + state.shippingCost;
      },
      removeAProduct: (state, actions: PayloadAction<string>) => {
         state.products = state.products.filter(
            product => product._id !== actions.payload
         );

         // include shipping amount
         state.totalPrice = calculateTotalPrice(state.products) + state.shippingCost;
      },
      clearCart: state => {
         state.products = [];
         state.totalPrice = 0;
      },
   },
});

export const {
   addToCart,
   incrementQuantity,
   decrementQuantity,
   removeAProduct,
   clearCart,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
