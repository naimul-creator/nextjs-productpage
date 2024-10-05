import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/libs/features/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
  })
}