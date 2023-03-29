import React from 'react'
import {Box, Heading, HStack, Image,Input,Text, VStack} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
    <Stack direction={['column','row']}>
   <VStack alignItems={"stretch"} w="full" px={"4"}>
    <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
        subscribe to get updates
    </Heading>
    <HStack
    borderBottom={"2px solid white"}>
    <Input placeholder="enter email" border={'none'} borderRadius="none"
        outline={"none"}
        focusBorderColor="none"
    />
        <Button
        p={"0"}
        colorScheme={"cyan"}
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}>
          <  AiOutlineSend size={20}/>
        </Button>
    </HStack>
   </VStack>
   <VStack w={"full"}
   borderLeft={["none","1px solid white"]}
   borderRight={["none","1px solid white"]}>

   <Heading textTransform={"uppercase"} textAlign={'center'}>Kapi's Tube</Heading>
   <Text>for videos</Text>
   </VStack>

   <VStack w="full">
    <Heading size={"md"} textTransform={"uppercase"} >social media connection</Heading>
    <Button variant={"link"} colorScheme={"cyan"}>
    <a href="https://www.youtube.com">Youtube</a>
    </Button>

    <Button variant={"link"} colorScheme={"cyan"}>
    <a href="https://github.com/kapilparsodkar?tab=repositories">Github</a>
    </Button>

    
    <Button variant={"link"} colorScheme={"cyan"}>
    <a target={'black'} href="https://www.instagram.com">instagram</a>
    </Button>
   </VStack>
    </Stack>
    </Box>
  )
}

export default Footer