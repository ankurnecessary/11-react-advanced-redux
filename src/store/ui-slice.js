import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: true },
  reducers: {
    toggle (state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
