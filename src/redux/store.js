import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./Products/products-reducer";


const rootReducer = combineReducers({
    currentProducts: productsReducer
})

const store = configureStore({
    reducer: rootReducer
})
export default store