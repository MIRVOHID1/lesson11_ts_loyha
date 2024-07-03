// import { configureStore } from "@reduxjs/toolkit";
// import watchListReducer from "../slice/watchListSlice";
// import cartReducer from "../slice/cartSlice";

// export const store = configureStore({
//     reducer: {
//         watchListData: watchListReducer
//         cardData: cartReducer
//     }
// })



import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../slice/watchListSlice";
import cartReducer from "../slice/cartSlice";

export const store = configureStore({
    reducer: {
        watchListData: watchListReducer,
        cardData: cartReducer
    }
});