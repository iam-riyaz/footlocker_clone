import { Box ,Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Checkbox,
    VStack,
    CheckboxGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
    
    } from "@chakra-ui/react"
import {AddIcon,MinusIcon} from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const FilterCompo=()=>{

    const [searchParams,setSearchParams]=useSearchParams()

    const  [gendervalues,setGendervalues]=useState([])
    const genderHandle =(values)=>{
        console.log(values)
           setGendervalues(values)
    }

    useEffect(()=>{
        if(gendervalues){
            setSearchParams({geneder:gendervalues},{replace:true})
        }
    })
    return(
        <>
        <Box>
            <Box>
                <Text fontSize="2xl">Refine Results</Text>
                <Box>
                    {/* -------------filter box start------------------------------------- */}
                                                <Accordion allowMultiple>
                                                    {/* ---------------------------------- */}
                                            <AccordionItem display={{base:"none",md:"block"}}>
                                    {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                       GENDER
                                        </Box>
                                        {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                        ) : (
                                        <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} display={{base:"none",md:"block"}} p="1rem 2rem">
                                            <CheckboxGroup colorScheme='blue' defaultValue={gendervalues}  onChange={genderHandle}>
                                            <VStack alignItems={"baseline"} spacing={[1, 5]} direction={['column', 'row']}>
                                                <Checkbox value='mens'>Men's</Checkbox>
                                                <Checkbox value='womens'>Women's</Checkbox>
                                                <Checkbox value='boys'>Boy's</Checkbox>
                                                <Checkbox value='girls'>Girl's</Checkbox>
                                            </VStack>
                                            </CheckboxGroup>
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            {/* ----------------------------------------------------------- */}
                            <AccordionItem display={{base:"none",md:"block"}}>
                                    {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                        AGE RANGE
                                        </Box>
                                        {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                        ) : (
                                        <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                            <CheckboxGroup colorScheme='blue' defaultValue={gendervalues}  onChange={genderHandle}>
                                            <VStack alignItems={"baseline"} spacing={[1, 5]} direction={['column', 'row']}>
                                                <Checkbox value='mens'>Men's</Checkbox>
                                                <Checkbox value='womens'>Women's</Checkbox>
                                                <Checkbox value='boys'>Boy's</Checkbox>
                                                <Checkbox value='girls'>Girl's</Checkbox>
                                            </VStack>
                                            </CheckboxGroup>
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            {/* ------------------------------------------------------------ */}
                            <AccordionItem display={{base:"none",md:"block"}}>
                                    {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                        PRODUCT TYPE
                                        </Box>
                                        {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                        ) : (
                                        <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                            <CheckboxGroup colorScheme='blue' defaultValue={gendervalues}  onChange={genderHandle}>
                                            <VStack alignItems={"baseline"} spacing={[1, 5]} direction={['column', 'row']}>
                                                <Checkbox value='mens'>Men's</Checkbox>
                                                <Checkbox value='womens'>Women's</Checkbox>
                                                <Checkbox value='boys'>Boy's</Checkbox>
                                                <Checkbox value='girls'>Girl's</Checkbox>
                                            </VStack>
                                            </CheckboxGroup>
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            </Accordion>
     {/* -----------------------filter box end----------------------------------- */}
                </Box>
                {/* for small screen size */}
                <Box display={{base:"block",md:"none"}} >
                    <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='blue'>
                        MenuItem
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                        <MenuItemOption value='asc'>Ascending</MenuItemOption>
                        <MenuItemOption value='desc'>Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuDivider />
                        <MenuOptionGroup title='Country' type='checkbox'>
                        <MenuItemOption value='email'>Email</MenuItemOption>
                        <MenuItemOption value='phone'>Phone</MenuItemOption>
                        <MenuItemOption value='country'>Country</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
        </>
    )
}