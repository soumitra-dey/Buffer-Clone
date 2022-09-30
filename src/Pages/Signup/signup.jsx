import React from "react"
import { Box, Flex, Image, Text, InputGroup, Input, InputRightElement, Button, Link } from "@chakra-ui/react";
import {useState, useEffect} from "react"
import {CheckIcon} from "@chakra-ui/icons"




function Signup(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [email,setemail]=useState("")
    const [chemail, setchemail]=useState(false)
    const [passpara, setpasspara]= React.useState(false)
    const [pass, setpass]=useState("")
    const [firstcheck, setfirstcheck]=useState(false)
    const [secondcheck, setsecondcheck]=useState(false)
    const [thirdcheck, setthirdcheck]=useState(false)
    const [dis, setdis]=useState(true)


    const checkon=()=>{
        setpasspara(true)
    }

    const checkpassword=(e)=>{
        setpass(e.target.value)
    }

    useEffect(()=>{
        let sym="!@#$%^&*"
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (pass.length>=8){
            setfirstcheck(true)
        } else {
            setfirstcheck(false)
        }
        
        if (pass.length==0) {
            setsecondcheck(false)
            setthirdcheck(false)
            setdis(true)
        }
        if (email.length==0) {
            setchemail(false)
            setdis(true)
        }

        for (let i=0;i<pass.length;i++) {
            let find=0;
            for (let j=0;j<char.length;j++) {
                if (pass[i]==char[j]) {
                    setsecondcheck(true)
                    find=1
                    break;
                } else {
                    setsecondcheck(false)
                }
            }
            if (find==1){
                break;
            }
        }
        
        for (let i=0;i<pass.length;i++) {
            let find=0;
            for (let j=0;j<sym.length;j++) {
                if (pass[i]==sym[j]) {
                    setthirdcheck(true);
                    find=1;
                    break;
                } else {
                    setthirdcheck(false)
                }
            }
            if (find==1) {
                break;
            }
        }

        for (let i=0;i<email.length;i++) {
            if (email[i]=="@") {
                setchemail(true)
                break;
            } else {
                setchemail(false)
            }
        }

        if (firstcheck && secondcheck && thirdcheck && chemail) {
            setdis(false)
        }


    },[pass,email])

    const signup=()=>{
        
    }

    return (
        <Flex justifyContent={{base:"space-between",lg:"space-between"}}>
            <Box padding="30px" w={{base:"100vw", lg:"70vw"}}>
                <Image src="https://i.ibb.co/5FdKVzp/Screenshot-2022-09-29-215519.png"/>
                <Flex mt="100px" direction="column" ml={{base:"7%", lg:"20%"}} alignItems="flex-start">
                    <Text fontFamily="Poppins, sans-serif" fontSize="30px">Let's get your account set up</Text>
                    <Text mt="30px" as="b">Email</Text>
                    <Input size='lg' w="md" onChange={(e)=>setemail(e.target.value)}/>
                    <Text mt="10px" as="b">Create a Password</Text>
                    <InputGroup size='lg' w="md">
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            onClick={checkon}
                            onChange={checkpassword}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {passpara && <Box textAlign="left" fontSize="14px" color="rgb(152, 152, 152)">
                        <Text as={firstcheck?"s":"i"}>At least 8 characters long</Text>{firstcheck && <CheckIcon color="green" ml="10px"/>}
                        <br/>
                        <Text as={secondcheck?"s":"i"}>Contains 1 uppercase character</Text>{secondcheck && <CheckIcon color="green" ml="10px"/>}
                        <br/>
                        <Text as={thirdcheck?"s":"i"}>Contains 1 number or symbol</Text>{thirdcheck && <CheckIcon color="green" ml="10px"/>}
                    </Box>}
                    <Button size='lg' w="md" mt="10px" bg="rgb(44,75,255)" color="white" _hover={{bg:"rgb(31, 53, 179)"}} disabled={dis} onClick={signup}>Sign Up</Button>
                </Flex>
                <Flex ml={{base:"7%", lg:"20%"}} w="md" justifyContent="space-between" fontSize="14px" mt="10px" as="b" color="rgb(152, 152, 152)">
                    <Text>I agree<Link color="blue.500"> Buffer's Terms of Service</Link></Text>
                    <Link>Already have an account?</Link>
                </Flex>
            </Box>
            <Image src="https://i.ibb.co/nQnSxNp/Screenshot-2022-09-29-215058.png" display={{base:"none",lg:"flex"}}/>
        </Flex>
    )
}

export default Signup