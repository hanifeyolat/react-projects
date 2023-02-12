import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductReducer  from "./ProjectSlice";

const rootReducer= combineReducers({
    product: ProductReducer.reducer
})

const store= configureStore ({
    reducer: rootReducer
})

export default store