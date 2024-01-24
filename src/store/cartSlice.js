import { createSlice } from '@reduxjs/toolkit';
import updateCart from './utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cartItems.find((p) => p.id === newItem.id);

      if (!existItem) {
        state.cartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
      } else {
        existItem.quantity++;
      }

      return updateCart(state);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existItem = state.cartItems.find((p) => p.id === itemId);

      if (existItem.quantity > 1) {
        existItem.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }

      return updateCart(state);
    },

    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      return updateCart(state);
    },

    resetCart: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});
export const { addToCart, removeFromCart, removeItemFromCart, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
