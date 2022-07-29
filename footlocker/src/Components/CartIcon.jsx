import {BsCart3} from "react-icons/bs"
import {Icon} from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import { CartCounter } from "./CartCounter"
export const CartIcon=()=>{
    return(
        <>
        <Box>
            <CartCounter position="relative"  />
       <Icon as={BsCart3} marginTop={-2}   boxSize="1.5rem" color={"white"}  ></Icon>
       </Box>
        {/* <svg focusable="false" aria-hidden="true" fill="currentColor" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg" color="white" viewBox="0 0 39 39"><path d="M21.02 18.58l.42-2H7.65l-.31-1.46h14.34L24 3.65H4.89L4.12 0H0v2h2.5l3.53 16.58h14.99zm.42-12.93l-1.51 7.47H6.91L5.32 5.65h16.12zM7.52 19.74a2.11 2.11 0 10-.01 4.23c1.17 0 2.12-.94 2.13-2.11a2.1 2.1 0 00-2.12-2.12zM18 21.85a2.13 2.13 0 014.25.01 2.13 2.13 0 01-4.25-.01z"></path></svg> */}
        </>
    )
}

// 