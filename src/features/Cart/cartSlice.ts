import { createSlice } from "@reduxjs/toolkit";
 

interface CartItem {
 id: number;
 name: string;
price: number;
    image: string;
 quantity: number;

}

interface CartState { cart: CartItem[]; }

const initialState: CartState = { cart: [] };





const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                 state.cart = state.cart.filter((item) => item.id !== action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);    
            
        },
        clearCart: (state) => {
            state.cart = [];
        },
        
    },
})

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state: { cart: CartState }) => state.cart.cart;
export default cartSlice.reducer;