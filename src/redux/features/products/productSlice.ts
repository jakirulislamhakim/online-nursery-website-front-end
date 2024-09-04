import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
   searchTerm: string;
};

const initialState: TInitialState = {
   searchTerm: '',
};

const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      searchTerm: (state, action: PayloadAction<string>) => {
         state.searchTerm = action.payload;
      },
   },
});

export const { searchTerm } = productSlice.actions;

export default productSlice.reducer;
