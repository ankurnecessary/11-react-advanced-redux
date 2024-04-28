import { configureStore, createSlice } from '@reduxjs/toolkit'

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
  showCart: true
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart (state, action) {
      const selectedProduct = state.items.find(item => item.id === action.payload.id)
      if (selectedProduct) {
        selectedProduct.quantity++
        selectedProduct.total += selectedProduct.price
      } else {
        action.payload.quantity = 1
        action.payload.total = action.payload.price
        state.items.push(action.payload)
      }
    },
    increaseQuantity (state, action) {
      const selectedProduct = state.items.find(item => item.id === action.payload)
      selectedProduct.quantity++
      selectedProduct.total += selectedProduct.price
    },
    decreaseQuantity (state, action) {
      const selectedProduct = state.items.find(item => item.id === action.payload)
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity--
        selectedProduct.total -= selectedProduct.price
      } else {
        const selectedProductIdx = state.items.indexOf(selectedProduct)
        state.items.splice(selectedProductIdx, 1)
      }
    },
    toggleCart (state) {
      state.showCart = !state.showCart
    }
  }
})

const store = configureStore({
  reducer: { cart: cartSlice.reducer }
})

export const cartActions = cartSlice.actions
export default store
