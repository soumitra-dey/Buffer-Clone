import React from "react";
import { Box, Flex, Image, Text, Menu, MenuItem, MenuList, MenuButton, Button, Grid, GridItem } from "@chakra-ui/react";
import {TriangleDownIcon, ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons"
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom"



function Final(){
    const {loginuser}=React.useContext(AuthContext)
    const navigate=useNavigate()



    function logout() {
        axios.get(`https://buffer-data-server.herokuapp.com/data`)
        .then((res)=>
        {   let fl=0;
            for (let i=0;i<res.data.length;i++) {
                if (res.data[i].email.split(".").join("").toString()==loginuser.split(".").join("").toString()) {
                    fl=res.data[i].id;
                    break;
                }
            }
            console.log(fl)
            axios.delete(`https://buffer-data-server.herokuapp.com/data/${fl}`)
            navigate("/")
        }
        )
    }



    return (
        <Box>
            <Flex w="100vw" borderBottom="1px solid #ccc" h="30px" justifyContent="space-between" alignItems="center" p="30px" >
                <Flex>
                    <Image src="https://i.ibb.co/F7kVsKF/Screenshot-2022-09-28-071955.png" w="9rem" h="2rem"/>
                    <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" _hover={{color:"blue", bg:"#ccc"}}>Publishing</Text>
                    <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" _hover={{color:"blue", bg:"#ccc"}}>Analytics</Text>
                    <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" _hover={{color:"blue", bg:"#ccc"}}>Engagement</Text>
                    <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" _hover={{color:"blue", bg:"#ccc"}}>Start Page</Text>
                </Flex>
                <Grid templateColumns="repeat(4, 150px)">
                    <Text color="blue" as="b">Invite Your Team</Text>
                    <Menu>
                        <MenuButton>
                            <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" fontSize="14px">Apps<TriangleDownIcon /></Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Buffer for IOS</MenuItem>
                            <MenuItem>Buffer for Android</MenuItem>
                            <MenuItem>Remix by Buffer</MenuItem>
                            <MenuItem>Integrations</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton>
                            <Text w="100px" as="b" color="rgb(149, 149, 149)" cursor="pointer" fontSize="14px">Help<TriangleDownIcon /></Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Visit Help Center</MenuItem>
                            <MenuItem>Quick Help</MenuItem>
                            <MenuItem>Status</MenuItem>
                            <MenuItem>Pricing & Plans</MenuItem>
                            <MenuItem>Wishlists</MenuItem>
                            <MenuItem>Changelog</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton>
                            {loginuser}<TriangleDownIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Account</MenuItem>
                            <MenuItem>My Prefrences</MenuItem>
                            <MenuItem>Channels</MenuItem>
                            <MenuItem>Team</MenuItem>
                            <MenuItem>Invite Your Team</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Grid>
            </Flex>
            <Flex>
                <Flex h="90vh" borderRight="1px solid #ccc" p="30px" direction="column" gap="20px" as="b" color="rgb(149, 149, 149)" alignItems="flex-start" >
                    <Text cursor="pointer" _hover={{color:"blue"}}>Calender</Text>
                    <Text cursor="pointer" _hover={{color:"blue"}}>Campaigns</Text>
                    <Text cursor="pointer" _hover={{color:"blue"}}>Queues</Text>
                </Flex>
                <Box>
                    <Flex padding="20px" justifyContent="space-between">
                        <Flex w="30%" justifyContent="space-evenly" alignItems="center">
                            <ArrowBackIcon border="1px solid #ccc" fontSize="20px" borderRadius="2px"/>
                            <Text>Today</Text>
                            <ArrowForwardIcon border="1px solid #ccc" fontSize="20px" borderRadius="2px"/>
                            <Text fontSize="24px" as="b">Oct 2 - 8, 2022</Text>
                        </Flex>
                        <Flex justifyContent="space-evenly" w="40%" alignItems="center">
                            <Text>GMT+5:30</Text>
                            <Menu>
                                <MenuButton as={Button}>
                                    All Posts <TriangleDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>All Posts</MenuItem>
                                    <MenuItem>Drafts</MenuItem>
                                    <MenuItem>Scheduled</MenuItem>
                                    <MenuItem>Sent Posts</MenuItem>
                                    <MenuItem>Pending Aproval</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button bg="blue" color="white">Create Post</Button>
                        </Flex>
                    </Flex>
                    <Grid h="80vh" w="80vw" padding="20px" overflow="auto" templateColumns="repeat(7,1fr)" templateRows="repeat(24,40px)">
                        <GridItem border="1px solid #ccc">Sunday 2</GridItem>
                        <GridItem border="1px solid #ccc">Monday 3</GridItem>
                        <GridItem border="1px solid #ccc">Tuesday 4</GridItem>
                        <GridItem border="1px solid #ccc">Wednesday 5</GridItem>
                        <GridItem border="1px solid #ccc">Thursday 6</GridItem>
                        <GridItem border="1px solid #ccc">Friday 7</GridItem>
                        <GridItem border="1px solid #ccc">Saturday 8</GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        
                    </Grid>
                </Box>
            </Flex>
        </Box>
    )
}

export default Final;