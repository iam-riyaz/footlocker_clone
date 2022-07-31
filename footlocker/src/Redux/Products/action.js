import * as types from "./actionType"
import Axios  from "axios"
import { Product } from "../../Pages/Product"
import axios from "axios"



// --------------- all products-------------------------------------
const fetchDataRequest=(payload)=>{
return{
    type: types.FETCH_DATA_REQUEST,
    payload
}

}

const fetchDataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest());

        Axios.get("/products",{params:{...payload}})
    .then(res=>  dispatch(fetchDataSuccess(res.data)))
    .catch(err=>dispatch(fetchDataFailure(err.data)))
    }
}
// ----------end------------------------------------



// -------------single product start--------------

        const fetchSingleProductRequest=(payload)=>{
            return{
                type:types.FETCH_SINGLE_PRODUCT_REQUEST,
                payload
            }
        }

        const fetchSingleProductSuccess=(payload)=>{
            return{
                type:types.FETCH_SINGLE_PRODUCT_SUCCESS,
                payload
            }
        }
        const fetchSingleProductFailure=(payload)=>{
                return{
                    type:types.FETCH_SINGLE_PRODUCT_FAILURE,
                    payload
                }
            }
    
export const fetchSingleProduct=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchSingleProductRequest());

        Axios.get(`/products/${payload}`)
        .then(res=>dispatch(fetchSingleProductSuccess(res.data)))
        .catch(err=>dispatch(fetchSingleProductFailure(err.data)))
    }
}

// ----------end-------------------------


// ------------add to cart ----------------------------

const addToCartRequest=(payload)=>{
    return{
        type: types.ADD_TO_CART_REQUEST,
        payload
    }
    
    }
    
    const addToCartSuccess=(payload)=>{
        return{
            type:types.ADD_TO_CART_SUCCESS,
            payload
        }
    }
    
    const addToCartFailure=(payload)=>{
        return{
            type:types.ADD_TO_CART_FAILURE,
            payload
        }
    }

    export const fetchAddToCart=(payload)=>{
        return(dispatch)=>{
            dispatch(addToCartRequest());

            Axios.post("/cart",payload)
            .then(res=>addToCartSuccess(res.data))
            .catch(err=>addToCartFailure(err.data))
        }
    }
    // -------------end----------------------




    // --------------------ADD product to cart in UI-----------------


    const fetchToCartRequest=(payload)=>{
        return{
            type: types.FETCH_TO_CART_REQUEST,
            payload
        }
        
        }
        
        const fetchToCartSuccess=(payload)=>{
            return{
                type:types.FETCH_TO_CART_SUCCESS,
                payload
            }
        }
        
        const fetchToCartFailure=(payload)=>{
            return{
                type:types.FETCH_TO_CART_FAILURE,
                payload
            }
        }

        export const fetchToUICart=(payload)=>{
         
            return(dispatch)=>{
                dispatch(fetchToCartRequest())

                Axios.get("/cart")
                .then(res=>dispatch(fetchToCartSuccess(res.data)))
                .catch(err=>dispatch(fetchToCartFailure(err.data)))
            }
        }

        // ------------------end-------------


        // -------------remove from cart---------------

        const removeCartRequest=(payload)=>{
            return{
                type: types.REMOVE_FROM_CART_REQUEST,
                payload
            }
            
            }
            
            const removeCartSuccess=(payload)=>{
                return{
                    type:types.REMOVE_FROM_CART_SUCCESS,
                    payload
                }
            }
            
            const removeCartFailure=(payload)=>{
                return{
                    type:types.REMOVE_FROM_CART_FAILURE,
                    payload
                }
            }

            export const removeCart=(id)=>dispatch=>{

                dispatch(removeCartRequest())
                Axios.delete(`/cart/${id}`)
                .then(res=>dispatch( removeCartSuccess(res.data)))
                .catch(err=>dispatch( removeCartFailure(err.data)))
            }