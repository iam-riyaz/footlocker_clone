import * as types from "./actionType"
import Axios  from "axios"
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
    .then(res=>dispatch(fetchDataSuccess(res.data)))
    .catch(err=>dispatch(fetchDataFailure(err.data)))
    }
}