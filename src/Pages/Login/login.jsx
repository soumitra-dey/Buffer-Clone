import { Box, Flex, Image, Text, InputGroup, Input, InputRightElement, Button, Link } from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons"
import ph from "./photo.png"




function Login(){



    return (
        <Flex justifyContent="space-between">
            <Box padding="40px" w={{base:"100vw", lg:"30vw"}}>
                <Image src="https://i.ibb.co/5FdKVzp/Screenshot-2022-09-29-215519.png"/>
                <Flex mt="40px" direction="column" alignItems="flex-start">
                    <Text fontFamily="Poppins, sans-serif" fontSize="30px">Log in</Text>
                    <Text mt="30px" fontSize="14px">Email Address</Text>
                    <Input size='lg' w={{base:"100%", lg:"sm"}} onChange={(e)=>setemail(e.target.value)}/>
                    <Text mt="10px" fontSize="14px">Password</Text>
                    <Input size='lg' w={{base:"100%", lg:"sm"}} onChange={(e)=>setemail(e.target.value)}/>
                    <Button size='lg' w={{base:"100%", lg:"sm"}} mt="10px" bg="rgb(44,75,255)" color="white" _hover={{bg:"rgb(31, 53, 179)"}}>Sign Up</Button>
                </Flex>
                <Flex w={{base:"100%", lg:"sm"}} justifyContent="space-between" fontSize="14px" mt="10px" as="b" color="rgb(152, 152, 152)">
                    <Text><Link>Create an account</Link></Text>
                    <Link>Forget your password?</Link>
                </Flex>
                <Text w={{base:"100%", lg:"sm"}} mt="30px" fontSize="14px" color="rgb(125, 125, 125)">We no longer support social sign on. Please click here to set your password and access your account.</Text>
                <Text w={{base:"100%", lg:"sm"}} mt="30px" fontSize="14px" color="rgb(125, 125, 125)">Terms of Service • Privacy Policy • Security</Text>
            </Box>
            <Image src={ph} h="100vh" display={{base:"none",lg:"flex"}}/>
        </Flex>
    )
}

export default Login;