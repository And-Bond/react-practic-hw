import { createReducer } from "@reduxjs/toolkit";
import { productsFetchSuccess } from "./products-actions";


export const productsReducer = createReducer([], {
    [productsFetchSuccess.type]: (_, {payload}) => payload
})