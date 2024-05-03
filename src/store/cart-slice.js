import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
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
  totalQuantity: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart (state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data.'
    }));

    const sendHttpRequest = async () => {
      const response = await fetch('https://react-http-17ba1-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendHttpRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }
  };
};

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
