import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
    Image,
    Text,
    Button,
    color
    
  } from '@chakra-ui/react'
  import{Icon} from "@chakra-ui/icons"

  import { FiGift } from 'react-icons/fi'
  import { CloseButton,   Select, useColorModeValue } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
 
  import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
// import { PriceTag } from './PriceTag'
// import { CartProductMeta } from './CartProductMeta'
import { removeCart } from '../Redux/Products/action'



// export const cartData = [
//     {
//       id: '1',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Ferragamo bag',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       id: '2',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Bamboo Tan',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
//     },
//     {
//       id: '3',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Yeezy Sneakers',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
//     },
//   ]

export const Cart=()=>{

   const dispatch=useDispatch()
    const cart=useSelector(store=>store.footlockerData.cart)
    
    const removeProduct=(id)=>{
       console.log("riyaz",id)
        dispatch(removeCart(id))

    }

    return(
        <>
         <Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart ({cart.length} items)
        </Heading>

        <Stack spacing="6">
          {cart.map((item) => (
            <CartItem removeProduct={removeProduct} id={item.id} key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary cart={cart} />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>

        </>
    )
}





// -------------
const QuantitySelect = (props) => {
    return (
      <Select
        maxW="64px"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
        {...props}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    )
  }
  
  export const CartItem = (props) => {
    const {
      isGiftWrapping,
      title,
      id,
      color,
      gender,
      quantity,
      img_url,
      currency,
      price,
      onChangeQuantity,
      removeProduct,
      onClickDelete,
    } = props
    return (
      <Flex
        direction={{
          base: 'column',
          md: 'row',
        }}
        justify="space-between"
        align="center"
      >
        <CartProductMeta
          name={title}
          color={color}
          gender={gender}
          image={img_url}
        //   isGiftWrapping={isGiftWrapping}
        />
  
        {/* Desktop */}
        <Flex
          width="full"
          justify="space-between"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <QuantitySelect
            value={quantity}
            onChange={(e) => {
              onChangeQuantity?.(+e.currentTarget.value)
            }}
          />
          <PriceTag price={price} currency={currency} />
          <CloseButton aria-label={`Delete ${name} from cart`} onClick={removeProduct(id)} />
        </Flex>
  
        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{
            base: 'flex',
            md: 'none',
          }}
        >
          <Link fontSize="sm" textDecor="underline">
            Delete
          </Link>
          <QuantitySelect
            value={quantity}
            onChange={(e) => {
              onChangeQuantity?.(+e.currentTarget.value)
            }}
          />
          <PriceTag price={price} currency={currency} />
        </Flex>
      </Flex>
    )
  }


//   -------------


const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({cart}) => {
    
    let arr= cart.map((e)=>{return(e.price)})
     console.log("arr",arr)
      var sum=0
for(var i of arr ){
    sum+=i
}

     const [total,setTotal]=useState(sum)

   useEffect(()=>{
    console.log(arr)
   },[arr])



    // console.log("checking cart", priceArr)

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">{cart.price}</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(total)}
            </Text>
          </Flex>
        </Stack>
        <Button backgroundColor={"black"} color="white" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
    )
  }

//   ---------------------

export const CartProductMeta = (props) => {
    const { isGiftWrapping = true, image, name, description,gender,color } = props
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              {gender} | {color}
            </Text>
          </Stack>
          {/* {isGiftWrapping && (
            <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
              <Icon as={FiGift} boxSize="4" />
              <Link fontSize="sm" textDecoration="underline">
                Add gift wrapping
              </Link>
            </HStack>
          )} */}
        </Box>
      </Stack>
    )
  }


//   ---------------

export function formatPrice(value, opts = {}) {
    const { locale = 'en-US', currency = 'USD' } = opts
    const formatter = new Intl.NumberFormat(locale, {
      currency,
      style: 'currency',
      maximumFractionDigits: 4,
    })
    return formatter.format(value)
  }
  
  export const PriceTag = (props) => {
    const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props
    return (
      <HStack spacing="1" {...rootProps}>
        <Price isOnSale={!!salePrice} textProps={priceProps}>
          {formatPrice(price, {
            currency,
          })}
        </Price>
        {salePrice && (
          <SalePrice {...salePriceProps}>
            {formatPrice(salePrice, {
              currency,
            })}
          </SalePrice>
        )}
      </HStack>
    )
  }
  
  const Price = (props) => {
    const { isOnSale, children, textProps } = props
    const defaultColor = mode('gray.700', 'gray.400')
    const onSaleColor = mode('gray.400', 'gray.700')
    const color = isOnSale ? onSaleColor : defaultColor
    return (
      <Text
        as="span"
        fontWeight="medium"
        color={color}
        textDecoration={isOnSale ? 'line-through' : 'none'}
        {...textProps}
      >
        {children}
      </Text>
    )
  }
  
  const SalePrice = (props) => (
    <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...props} />
  )