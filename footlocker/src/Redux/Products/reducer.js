import * as types from "./actionType"


const initialState={
    products:[],
    singleProduct:{},
    cart:[],
    error:"",
    loading:false
}

export const reducer=(state=initialState, action)=>{

    const {type,payload}=action

    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{ 
                ...state,
                error:"",
                loading:true
             }
        case types.FETCH_DATA_SUCCESS:
            return{
                ...state,
                products:payload,
                error:"",
                loading:false
            }  
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false  
            } 
        case types.FETCH_SINGLE_PRODUCT_REQUEST:
            return{ 
                ...state,
                error:"",
                loading:true
                }
        case types.FETCH_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
               singleProduct:payload,
                error:"",
                loading:false
            }  
         case types.FETCH_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false  
            }
            case types.ADD_TO_CART_REQUEST:
                return{ 
                    ...state,
                    error:"",
                    loading:true
                    }
            case types.ADD_TO_CART_SUCCESS:
                return{
                    ...state,
                   cart:[...state.cart, payload ],
                    error:"",
                    loading:false
                }  
             case types.ADD_TO_CART_FAILURE:
                return{
                    ...state,
                    error:payload,
                    loading:false  
                }  
            case types.FETCH_TO_CART_REQUEST:
                return{ 
                    ...state,
                    error:"",
                    loading:true
                    }
            case types.FETCH_TO_CART_SUCCESS:
                return{
                    ...state,
                    cart:[...payload ],
                    error:"",
                    loading:false
                }  
                case types.FETCH_TO_CART_FAILURE:
                return{
                    ...state,
                    error:payload,
                    loading:false  
                }             
        default:
            return state    
    }

}