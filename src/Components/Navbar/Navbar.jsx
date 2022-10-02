import React from "react";
import { Button, Container, Image, Text, Flex, Center, Box} from "@chakra-ui/react";
import NavbarLgModel from "./NavbarLgModel";
import "./navbar.css"
import Navbarbasemodel from "./navbarbasemodel"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Pages/context/AuthContext";


function Navbar(){
    const [ipadd, setipadd]=useState("")
    const navigate=useNavigate()
    const {setloginuser}=React.useContext(AuthContext)



    useEffect(()=>{
        axios.get('https://api.bigdatacloud.net/data/ip-geolocation-full?key=d9e53816d07345139c58d0ea733e3870')
        .then((res)=>setipadd(res.data.ip))
    },[])

    function gotopage(){
        axios.get(`https://buffer-data-server.herokuapp.com/data`)
        .then((res)=>
        {   let fl=0;
            for (let i=0;i<res.data.length;i++) {
                if (res.data[i].ip.split(".").join("").toString()==ipadd.split(".").join("").toString()) {
                    fl=res.data[i];
                    break;
                }
            }
            if (fl==0) {
                navigate("/login")
            } else {
                setloginuser(fl.email)
                navigate("/welcome")
            }
        }
        )
    }


    return (
        <Flex w="97%" m="auto" boxShadow='base' p='6' rounded='md' bg='white' h={{base:"70px", lg:"110px"}} justifyContent="space-between" alignItems="center">
            <Center>
                <Image src="https://i.ibb.co/F7kVsKF/Screenshot-2022-09-28-071955.png" w="9rem" h="2rem"/>
            </Center>
            <NavbarLgModel/>
            <Flex gap="15px">
                <Text display={{base:"none",lg:"flex"}} color="rgb(77, 103, 255)" cursor="pointer" fontSize='xl' className="loginbtn" onClick={gotopage}>Log in</Text>
                <Button color="white" bg="rgb(44,75,255)" fontSize={{base:".7rem", lg:"xl"}} p="15px" _hover={{bg:"rgb(31, 53, 179)"}}>Get started now</Button>
                <Navbarbasemodel/>
            </Flex>           
        </Flex>
    )
}

export default Navbar;