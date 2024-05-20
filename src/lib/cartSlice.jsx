// features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
<<<<<<< HEAD
      const { product, quantity, volume } = action.payload;
=======
      const { product, quantity, resto_id } = action.payload;
>>>>>>> 93a5acf9 (Init)
      const existingIndex = state.items.findIndex(item => item.id === product.id);

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += quantity;
      } else {
<<<<<<< HEAD
        state.items.push({ ...product, quantity, volume });
=======
        state.items.push({ ...product, quantity, resto_id,  });
>>>>>>> 93a5acf9 (Init)
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.items[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0 && state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    removeAll: (state) => {
      state.items = [];

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    }
  }
});

export const { addItem, incrementQuantity, decrementQuantity, removeItem, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
