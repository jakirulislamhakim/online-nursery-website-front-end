import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
   searchTerm: string;
   pages: number;
};

const initialState: TInitialState = {
   searchTerm: '',
   pages: 1,
};

const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      searchTerm: (state, action: PayloadAction<string>) => {
         state.searchTerm = action.payload;
      },
      pages: (state, action: PayloadAction<number>) => {
         state.pages = action.payload;
      },
   },
});

export const { searchTerm, pages } = productSlice.actions;

export default productSlice.reducer;
