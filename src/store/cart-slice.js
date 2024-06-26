import { createSlice } from '@reduxjs/toolkit';
/*
{
  title: 'some title',
  price: 6,
  description: 'some description',
  quantity: 3,
  total: 6 * 3 = 18
}
*/
const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart (state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart (state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        newItem.quantity = 1;
        newItem.total = newItem.price;
        state.items.push(newItem);
      }
    },
    removeItemFromCart (state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      } else {
        const selectedProductIdx = state.items.indexOf(existingItem);
        state.items.splice(selectedProductIdx, 1);
      }
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
