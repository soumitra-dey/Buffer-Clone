import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";




function Welcome() {


    return (
        <Box w={{base:"90%",lg:"70%"}} margin="auto" mt="15vh">
            <Text fontSize={{base:"22px", lg:"32px"}}>Welcome to Buffer 👋</Text>
            <Text color="rgb(149, 149, 149)" mt="20px">Where would you like to start?</Text>
            <Grid templateColumns="repeat(4,1fr)" mt="20px" gap="20px">
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/xYCt3D7/Screenshot-2022-10-02-113415.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/RNF6JtM/Screenshot-2022-10-02-113504.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/HDfs10p/Screenshot-2022-10-02-113532.png"/>
                <Image border="1px solid rgb(149, 149, 149)" borderRadius="5px" _hover={{border:"1px solid blue"}} boxShadow='lg' src="https://i.ibb.co/Jt3RQ0b/Screenshot-2022-10-02-113601.png"/>
            </Grid>
            <Text color="blue" _hover={{color:"rgb(149, 149, 149)"}} mt="20px"><Link to="/welcome2">Skip for now</Link></Text>
        </Box>
    )
}

export default Welcome;