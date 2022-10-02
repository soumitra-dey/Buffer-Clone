import React from "react";
import { Box, Flex, Image, Text, InputGroup, Input, InputRightElement, Button} from "@chakra-ui/react";
import ph from "./photo.png"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../Pages/context/AuthContext";







function Login(){
    const [email,setemail]=useState("")
    const [pass, setpass]=useState("")
    const [ipadd,setipadd]=useState("")
    const navigate=useNavigate()
    const {setloginuser}=React.useContext(AuthContext)




    useEffect(()=>{
        axios.get('https://api.bigdatacloud.net/data/ip-geolocation-full?key=d9e53816d07345139c58d0ea733e3870')
        .then((res)=>setipadd(res.data.ip))
    })

    function login () {
        axios.get(`https://buffer-data-server.herokuapp.com/logindata`)
        .then((res)=>
        {   let fl=0;
            for (let i=0;i<res.data.length;i++) {
                if (res.data[i].email.split(".").join("").toString()==email.split(".").join("").toString()) {
                    fl=res.data[i];
                    break;
                }
            }
            if (fl==0) {
                alert("You are not a register user! Please Sign up first")
            } else {
                if (fl.email.split(".").join("").toString()==email.split(".").join("").toString() && fl.password.split(".").join("").toString()==pass.split(".").join("").toString()) {
                    storeuserdata()
                } else {
                    alert("Wrong Credential")
                }
            }
        }
        )
    }

    function storeuserdata(){
        setloginuser(email)
        let ipdata={
            ip:ipadd,
            status:true,
            email:email,
        }
        axios.post(`https://buffer-data-server.herokuapp.com/data`,ipdata)
        
        navigate("/welcome")

    }





    return (
        <Flex justifyContent="space-between">
            <Box padding="40px" w={{base:"100vw", lg:"30vw"}}>
                <Image src="https://i.ibb.co/5FdKVzp/Screenshot-2022-09-29-215519.png"/>
                <Flex mt="40px" direction="column" alignItems="flex-start">
                    <Text fontFamily="Poppins, sans-serif" fontSize="30px">Log in</Text>
                    <Text mt="30px" fontSize="14px">Email Address</Text>
                    <Input size='lg' w={{base:"100%", lg:"sm"}} onChange={(e)=>setemail(e.target.value)}/>
                    <Text mt="10px" fontSize="14px">Password</Text>
                    <Input size='lg' tupe="password" w={{base:"100%", lg:"sm"}} onChange={(e)=>setpass(e.target.value)}/>
                    <Button size='lg' w={{base:"100%", lg:"sm"}} mt="10px" bg="rgb(44,75,255)" color="white" _hover={{bg:"rgb(31, 53, 179)"}} onClick={login}>Login</Button>
                </Flex>
                <Flex w={{base:"100%", lg:"sm"}} justifyContent="space-between" fontSize="14px" mt="10px" as="b" color="rgb(152, 152, 152)">
                    <Text><Link to="/signup">Create an account</Link></Text>
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