import { productsFetchSuccess } from "./products-actions";
import { getProducts } from "shared/api";

export const productsFetchOption =() => {
    const fetchFun = async(dispatch, getState) => {
        try {
            const products = await getProducts()
            dispatch(productsFetchSuccess(products))
        } catch (error) {
            
        }
    }
    return fetchFun
}