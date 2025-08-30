import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "Audio" | "Phone" | "Laptop" | "Accessory";
  rating: number;
  tags?: string[];
}

interface ProductsState {
  products: Product[];}

const initialState: ProductsState = {products:[
  {
    id: 1,
    name: "AirPods Pro",
    price: 899,
    image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Audio",
    rating: 4.7,
    tags: ["Bestseller"],
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 5999,
    image: "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Phone",
    rating: 4.8,
    tags: ["Nowość"],
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 7299,
    image: "https://images.unsplash.com/photo-1710905018864-d585574d79f8?q=80&w=887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Laptop",
    rating: 4.9,
  },
  {
    id: 4,
    name: "USB-C Charger 30W",
    price: 149,
    image: "https://images.unsplash.com/photo-1705147290571-dde8fb73cf98?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessory",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Over-Ear Headset",
    price: 499,
    image: "https://images.unsplash.com/photo-1687417628248-21d60aaea960?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Audio",
    rating: 4.4,
  },
  {
    id: 6,
    name: "iPhone 14",
    price: 3899,
    image: "https://plus.unsplash.com/premium_photo-1681233750830-dfbb25c7abc0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Phone",
    rating: 4.6,
  },
  {
    id: 7,
    name: "MacBook Air M4",
    price: 10499,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Laptop",
    rating: 4.8,
    tags: ["Promo"],
  },
  {
    id: 8,
    name: "MagSafe Case",
    price: 199,
    image: "https://images.unsplash.com/photo-1605000977407-2771f2f8e908?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessory",
    rating: 4.1,
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 249,
    image: "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Audio",
    rating: 4.3,
  },
  {
    id: 10,
    name: "USB-C Cable",
    price: 69,
    image: "https://plus.unsplash.com/premium_photo-1669262667978-5d4aafe29dd5?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessory",
    rating: 4.0,
  },
]};
const productsSlice = createSlice({
  name: "products",
 initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },   
     removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
  },
});


export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;