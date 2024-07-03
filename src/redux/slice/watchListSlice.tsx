// import { createSlice } from "@reduxjs/toolkit";

// const watchListFromLocalStorage = localStorage.getItem("WatchList");
// const watchList = watchListFromLocalStorage ? Array.isArray(JSON.parse(watchListFromLocalStorage)) ? JSON.parse(watchListFromLocalStorage) : [] : [];

// const initialState = {
//     watchList,
// };

// const watchListSlice = createSlice({
//     name: "watchList",
//     initialState,
//     reducers: {
//         addProductToWatchList: (state, action) => {
//             const newProduct = action.payload;
//             state.watchList.unshift(newProduct);
//             // Mahsulotni qo'shgandan so'ng, watchList-ni mahalliy saqlashda saqlab qo'ying
//             localStorage.setItem("WatchList", JSON.stringify(state.watchList));
//         }
//     }
// });

// // Eksporatsiya qilinayotgan reducer
// export const { addProductToWatchList } = watchListSlice.actions;
// export default watchListSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchList: JSON.parse(localStorage.getItem("WatchList") || "[]") as string[]
}

const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers:{
        watchListProduct: (state, action) => {
            localStorage.setItem("WatchList", JSON.stringify(state.watchList))
            state.watchList.unshift( action.payload)
        }
    }
})

export const {watchListProduct} = watchListSlice.actions;
const watchListReducer = watchListSlice.reducer;

export default watchListReducer

