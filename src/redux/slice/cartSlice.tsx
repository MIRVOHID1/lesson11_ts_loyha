import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("Cart") || "[]") as string[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        cartProduct: (state, action) => {
            localStorage.setItem("Cart", JSON.stringify(state.cart))
            state.cart.unshift( action.payload)
        }
    }
})

export const {cartProduct} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer