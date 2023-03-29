import React from 'react'
import {Box, Heading, Image,Text} from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import {Image} from 'react-bootstrap'



import img1 from "../assests/1.jpeg"
import img2 from "../assests/2.jpeg"
import img3 from "../assests/3.jpeg"
import img4 from "../assests/4.jpeg"
import img5 from "../assests/5.png"
import { Container } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'}minH={'100vh'} p='16'>
    <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Services</Heading>
    <Stack h="full" p={"4"}
    alignItems={"center"}
        direction={['column','row']}>
<Image src={img5} h={['40','400']} filter={"hue-rotate(160deg)"}/>
 <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}
 textAlign={"center"} > 
 Entertainment: These channels feature musicians, comedians, animators, and other entertainers sharing creative skills. Gaming: One of the most popular channel types, gaming channels produce videos related to video and tabletop games.
 </Text>
    </Stack>
    </Container>
    </Box>
  )
}

const head={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:'uppercase',
    p:'4',
    size:"4xl"

}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
    <Box w="full" h={'100vh'}>
   <Image src={img1}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...head}>
    watch videos

    </Heading>

    </Box>

    <Box w="full" h={'100vh'}>
   <Image src={img2}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...head}>
    videos is entertainment

    </Heading>

    </Box>

    <Box w="full" h={'100vh'}>
   <Image src={img3}/>
    <Heading bgColor={'blackAlpha.300'} color={'white'} {...head}>
   nature is calm

    </Heading>

    </Box>
    <Box w="full" h={'100vh'}>
   <Image src={img4}/>
    <Heading bgColor={'blackAlpha.300'} color={'white'} {...head}>
    nature is relaxing

    </Heading>

    </Box>
    

    </Carousel>
)

export default Home