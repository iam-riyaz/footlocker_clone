import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { FilterCompo } from "../Components/FilterCompo"
import { fetchData } from "../Redux/Products/action"
import { store } from "../Redux/store"
// import { dispatch } from "react"


export const Products=()=>{

    const products=useSelector((store)=>store.footlockerData.products )
const dispatch=useDispatch()
    useEffect(()=>{
           if(products?.length=== 0)
           {
            dispatch(fetchData())
           }
    })
    console.log(products)

    return(
        <>
        <Box>
            <Box>
                <FilterCompo/>
            </Box>
            <Box>
                {/* products will appear here */}
            </Box>
        </Box>
        </>
    )
}