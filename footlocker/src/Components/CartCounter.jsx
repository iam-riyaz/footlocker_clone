import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../Redux/store"
import { fetchToUICart } from "../Redux/Products/action"

export const CartCounter=()=>{

    const cart=useSelector(store=>store.footlockerData.cart)

    const dispatch=useDispatch()

    useEffect(()=>{
       if(cart?.length===0)
       {
        console.log(cart)
        dispatch(fetchToUICart())
       }
    },[cart?.length, dispatch])

    return(
        <>
        <Box color={"black"} marginLeft={2} paddingX={2} textAlign="center" borderRadius={"50%"} backgroundColor={"white"}>
            {cart?.length? cart.length:0}
        </Box>
        </>
    )
}