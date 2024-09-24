import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import productReducer from './features/products/productSlice';
import addToCartReducer from './features/addToCart/addToCartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist/es/constants';

const CartPersistConfig = {
   key: 'cart',
   storage,
   whitelist: ['products', 'totalPrice', 'shippingCost'],
};

const carPersistedReducer = persistReducer(CartPersistConfig, addToCartReducer);

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      product: productReducer,
      cart: carPersistedReducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [
               FLUSH,
               REHYDRATE,
               PAUSE,
               PERSIST,
               PURGE,
               REGISTER, // Ignore redux-persist actions to avoid non-serializable warnings
            ],
         },
      }).concat(baseApi.middleware),
   devTools: process.env.NODE_ENV !== 'production',
});

// parsisStore for the store
export const parsiStore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
