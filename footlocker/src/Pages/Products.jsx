import { Badge,Text, Box, Circle, Flex, Icon, Stack,Tooltip, useColorModeValue ,chakra,Image, VStack, color} from "@chakra-ui/react"
// import {FiShoppingCart} from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { FilterCompo } from "../Components/FilterCompo"
import { fetchData } from "../Redux/Products/action"
import { store } from "../Redux/store"

// import { dispatch } from "react"


export const Products=()=>{

    const products=useSelector((store)=>store.footlockerData.products )
    console.log("products",products)
    const [searchParams]=useSearchParams()




const dispatch=useDispatch()


    useEffect(()=>{
           if(products?.length=== 0)
           {
            let params={"gender":searchParams.getAll("gender")}
            dispatch(fetchData(params))
           }
    },[dispatch,products?.length,searchParams,products])


    console.log(products)

    return(
        <> 
        <Box>
            <Stack display={{md: "flex"}} flexDirection={{md:"row"}}>
            <Box >
                <FilterCompo/>
            </Box>
            <Box paddingTop={"100px"} >
                <Flex px={12} flexWrap="wrap" className="riyaz" justifyContent={"inherit"} >
                 {products.map((e)=>{
                    return( <ProductAddToCart   key={e.id} gender={e.gender} title={e.title} img_url={e.img_url} price={e.price} color={e.color} />)
                 })}
                </Flex>
               
            </Box>
            </Stack>
        </Box>
        </>
    )
}

function ProductAddToCart({gender,title,img_url,price,color}) {
    return (
      <Flex py={3} className="inside" marginRight={"20px"}   alignItems="center" >
        <Box 
          _hover={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(105, 101, 101, 0.621) 0px 0px 0px inset"}}
          bg={useColorModeValue('#f5f5f5', 'gray.800')}
          maxW="sm"
          alignItems={"center"}
          borderWidth="1px"
          shadow="lg"
          position="relative" 
          width={"270px"}
        
          
          >
          {(
           <Box height={"250px"} d="flex" alignItems="baseline"  background={`url(${img_url}) center/contain no-repeat  `} >
           {/* <Image  p="15px"
           borderBottom={"1px solid #dddddd"}
           
            src={img_url}
            alt={`Picture of ${title}`}
            // roundedTop="lg"
          /> */}
             <Badge border={"1px solid black"} mx="4" my="4" py="4px" px="6px" color={"white"} bg="black" fontSize="1em" colorScheme="black">
               New
             </Badge>
           
         </Box>
          )}
  
          
  
          <Box p="5" bg={"white"}>
            {/* <Box d="flex" alignItems="baseline">
              {(
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box> */}
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              
            </Flex>
            <Flex color={"#6b6b6b"}>
                <Text>{gender}</Text>
                <Text px={"4px"}>.</Text>
                <Text>{color}</Text>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box fontSize="xl" color="black">
                <Box as="span" >
                  $
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }