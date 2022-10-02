import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";




function Welcome2() {


    return (
        <Box w={{base:"90%",lg:"50%"}} margin="auto" mt="10vh">
            <Text fontSize={{base:"22px", lg:"32px"}}>Get started with Buffer </Text>
            <Text color="rgb(149, 149, 149)" mt="20px" margin="auto" w={{base:"100%", lg:"50%"}}>Connect a channel to plan, create and schedule content.You can always add one later.</Text>
            <Grid templateColumns="repeat(4,1fr)" mt="20px" gap="20px">
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/ysh5vbC/Screenshot-2022-10-02-130330.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/RjSSQ9P/Screenshot-2022-10-02-130427.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/4JRxN0V/Screenshot-2022-10-02-130502.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/bdxDMmg/Screenshot-2022-10-02-130520.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/SXGpyQn/Screenshot-2022-10-02-130543.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/fXfkZ65/Screenshot-2022-10-02-130602.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/HNwD4h5/Screenshot-2022-10-02-130625.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/7rkD5z0/Screenshot-2022-10-02-130641.png"/>
            </Grid>
            <Text color="blue" _hover={{color:"rgb(149, 149, 149)"}} mt="20px"><Link to="/final">Connect later, explore first</Link></Text>
        </Box>
    )
}

export default Welcome2;