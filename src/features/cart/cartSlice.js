import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: []
  cart: [
    {
      pizzaId: 12,
      name: 'mediteranian',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increasingItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice
    },
    deacreasingItemQuantity(state, action) {
        const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
        state.cart = []
    },
  },
});

export const {addItem, deleteItem, increasingItemQuantity, deacreasingItemQuantity, clearCart } = cartSlice.actions;


export default cartSlice.reducer


export const getTotalCartQuantity = (state) => {
  state.cart.cart.reduce((sum, item) => sum + item.quantity)
}

export const getTotalCartPrice = (state) => {
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice)
}