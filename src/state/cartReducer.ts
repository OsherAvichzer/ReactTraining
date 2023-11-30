import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductData from "/OsherReactTrainingWorks/osher-react/src/ProductData";

interface CartState {
  items: ProductData[];
  quantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  quantity: 0,
  totalPrice: 1000,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ProductData>) {
      state.items.push(action.payload);
      state.quantity++;
    },
    deleteItem(state, action: PayloadAction<number>) {
      if (state.quantity > 0) {
        state.quantity--;
        state.items.splice(action.payload, 1);
      }
    },
    orderItems(state, action: PayloadAction<number>) {
      state.items = [];
      state.quantity = 0;
      state.totalPrice = state.totalPrice - action.payload;
    },
    orderItem(state, action: PayloadAction<ProductData>) {
      state.quantity--;
      state.totalPrice = state.totalPrice - action.payload.price;
      state.items.splice(0, 1);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export const { orderItem } = cartSlice.actions;

export default cartSlice.reducer;
