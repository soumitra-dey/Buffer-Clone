import React from "react";
import { Button, Container, Image, Text, Flex, Center, Box} from "@chakra-ui/react";
import NavbarLgModel from "./NavbarLgModel";
import "./navbar.css"
import Navbarbasemodel from "./navbarbasemodel"

function Navbar(){


    return (
        <Flex w="97%" m="auto" boxShadow='base' p='6' rounded='md' bg='white' h={{base:"70px", lg:"110px"}} justifyContent="space-between" alignItems="center">
            <Center>
                <Image src="https://i.ibb.co/F7kVsKF/Screenshot-2022-09-28-071955.png" w="9rem" h="2rem"/>
            </Center>
            <NavbarLgModel/>
            <Flex gap="15px">
                <a href=""><Text display={{base:"none",lg:"flex"}} color="rgb(77, 103, 255)" fontSize='xl' className="loginbtn">Log in</Text></a>
                <Button color="white" bg="rgb(44,75,255)" fontSize={{base:".7rem", lg:"xl"}} p="15px" _hover={{bg:"rgb(31, 53, 179)"}}>Get started now</Button>
                <Navbarbasemodel/>
            </Flex>           
        </Flex>
    )
}

export default Navbar;